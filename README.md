# FAQ Management

## Features
#### Multiple language support
#### Automatic caching to reduce overload
#### Translation is done to multiple languages once FAQ is created. Background/CRON worker support in future.

## Steps to run

1. Run the docker-compose file to ensure Postgres and Redis services are up.
2. Run `npx prisma migrate dev` to migrate the schema to your database.
3. Run the http service and frontend service using dev script.
   
# Fetch all faqs using language parameter
```
GET /api/faq/?lang=en HTTP/1.1
Host: localhost:3000
User-Agent: HTTPie
```

# How to add FAQ through Backend:
```
POST /api/faq HTTP/1.1
Content-Length: 225
Content-Type: application/json
Host: localhost:3000
User-Agent: HTTPie

{
  "question": "Who can open a Fixed Deposit?",
  "answer": "Any Indian citizen who is 18 years old or older and has valid identification documents like a PAN card and Aadhaar can open a Fixed Deposit.",
  "language": "en"
}
```

# Screenshots (Client side):
![image](https://github.com/user-attachments/assets/991695cf-e3ef-4976-bed7-e0fad744b8d6)
![image](https://github.com/user-attachments/assets/33690867-99c1-44a2-9389-cf4c2804f385)
![image](https://github.com/user-attachments/assets/a85b1e8b-aa58-46dc-b7bb-c53f24a16760)

# Screenshots (Admin side):
![image](https://github.com/user-attachments/assets/74b794e1-dbc0-4979-8fe9-0b767fdd7c96)

### Updating FAQ
![image](https://github.com/user-attachments/assets/a09c172e-7bd2-4868-a522-2b3cbc19d45a)

### Adding new FAQ
![Uploading image.png…]()
