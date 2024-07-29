import sys
import time
import requests

def send_messages(access_tokens, convo_id, delay, haters_name, messages):
    headers = {
        'Connection': 'keep-alive',
        'Cache-Control': 'max-age=0',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 8.0.0; Samsung Galaxy S9 Build/OPR6.170623.017; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.125 Mobile Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8',
        'referer': 'www.google.com'
    }

    access_tokens = access_tokens.split('|')
    messages = messages.split('|')
    num_tokens = len(access_tokens)
    num_messages = len(messages)
    max_tokens = min(num_tokens, num_messages)

    while True:
        try:
            for message_index in range(num_messages):
                token_index = message_index % max_tokens
                access_token = access_tokens[token_index]
                message = messages[message_index].strip()

                url = f"https://graph.facebook.com/v15.0/{convo_id}/"
                parameters = {'access_token': access_token, 'message': f"{haters_name} {message}"}
                response = requests.post(url, json=parameters, headers=headers)

                current_time = time.strftime("%Y-%m-%d %I:%M:%S %p")
                if response.ok:
                    print(f"[+] Messages {message_index + 1} sent by Token {token_index + 1}: {haters_name} {message}")
                    print(f"  - Time: {current_time}")
                else:
                    print(f"[x] Failed to send message {message_index + 1} with Token {token_index + 1}: {haters_name} {message}")
                    print(f"  - Time: {current_time}")

                time.sleep(int(delay))
            print("\n[+] All messages sent. Restarting the process...\n")
        except Exception as e:
            print(f"[!] An error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 5:
        print("Usage: python message_sender.py <accessTokens> <convoID> <delay> <hatersName> <messages>")
        sys.exit(1)

    access_tokens = sys.argv[1]
    convo_id = sys.argv[2]
    delay = sys.argv[3]
    haters_name = sys.argv[4]
    messages = ' '.join(sys.argv[5:])
    
    send_messages(access_tokens, convo_id, delay, haters_name, messages)