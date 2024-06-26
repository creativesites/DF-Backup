let a = {
  "id": "eed2a82b-8a51-4f41-ae21-b12b0862d512-0a3836f2",
  "fulfillmentText": "<speak> <audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/0-ClientGreetings/ClientRegal2.ogg\">\nWelcome to Regal Nissan Service Department. This is Allio, your digital assistant. I can book appointments or get you the help you need\n</audio> </speak>",
  "language_code": "en",
  "queryText": "TELEPHONY_WELCOME",
  "webhookPayload": {},
  "intentDetectionConfidence": 1,
  "action": "my_tools2",
  "webhookSource": "",
  "parameters": {
    "customerPhone2": "4047477338",
    "smsPhoneNumber": "6506900634",
    "customerName": "Unknown",
    "smsMessage": "[Regal Nissan]  \n4047477338",
    "smsFromNumber": "",
    "anyURL": "https://eu-west-1.aws.data.mongodb-api.com/app/application-2-febnp/endpoint/sendSlackNotification?channel=aibdc&message=Regal Nissan: 4047477338"
  },
  "fulfillmentMessages": [
    {
      "platform": "TELEPHONY",
      "telephonySynthesizeSpeech": {
        "ssml": "<speak> <audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/0-ClientGreetings/ClientRegal2.ogg\">\nWelcome to Regal Nissan Service Department. This is Allio, your digital assistant. I can book appointments or get you the help you need\n</audio> </speak>"
      }
    },
    {
      "text": {
        "text": [
          "<speak> <audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/0-ClientGreetings/ClientRegal2.ogg\">\nWelcome to Regal Nissan Service Department. This is Allio, your digital assistant. I can book appointments or get you the help you need\n</audio> </speak>"
        ]
      }
    }
  ],
  "diagnosticInfo": {
    "webhook_latency_ms": "85.0",
    "accumulated_webhook_latency_ms": "1060.0"
  },
  "webhookStatus": {
    "webhookStatus": {
      "message": "Webhook execution successful"
    },
    "webhookUsed": true
  },
  "outputContexts": [
    {
      "lifespanCount": 1,
      "name": "makeappt",
      "parameters": {
        "customerPhone": "6506900634",
        "check_url": "https://h2qllp9qmd.execute-api.us-east-1.amazonaws.com/dealerlogix/check?id=REGALNISSAN&brand=Nissan&dealer=2387/895c4f4cf35cd7aa",
        "businessPhone.original": "",
        "hoursLocation": "We are located at 1090 Holcomb Bridge Rd\nRoswell. Our service department hours are, 7 AM to 6 PM, Monday through Friday; and\n8 AM to 4 PM on Saturday",
        "smsFromNumber": "",
        "make.original": "",
        "smsMessage.original": "",
        "customerName.original": "",
        "make": "Nissan",
        "example": "Altima",
        "book_url": "https://h2qllp9qmd.execute-api.us-east-1.amazonaws.com/dealerlogix/book?id=REGALNISSAN&dealer=2387/895c4f4cf35cd7aa",
        "customerPhone.original": "",
        "hoursLocation.original": "",
        "fallbackService.original": "",
        "smsFromNumber.original": "",
        "businessName": "Regal Nissan",
        "smsPhoneNumber.original": "",
        "greeting": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/0-ClientGreetings/ClientRegal2.ogg\">\nWelcome to Regal Nissan Service Department. This is Allio, your digital assistant. I can book appointments or get you the help you need\n</audio>",
        "check_url.original": "",
        "advisorNumber.original": "",
        "email.original": "",
        "businessName.original": "",
        "advisorEmail": "booking@allio.io",
        "recallService": "RECALL",
        "anyURL": "https://eu-west-1.aws.data.mongodb-api.com/app/application-2-febnp/endpoint/sendSlackNotification?channel=aibdc&message=Regal Nissan: 4047477338",
        "customerPhone2.original": "",
        "prompt": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/S-PleaseSayMakeApptOrOther.ogg\">\nPlease say make appointment or say other</audio>",
        "example.original": "",
        "smsPhoneNumber": "6506900634",
        "recallService.original": "",
        "fallbackService": "GM",
        "apiName.original": "",
        "email": "",
        "prompt.original": "",
        "timeSlots.original": "",
        "customerName": "Unknown",
        "WeekOpenCloseSatOpenClose": "4:00,15:00,5:00,13:00",
        "WeekOpenCloseSatOpenClose.original": "",
        "book_url.original": "",
        "greeting.original": "",
        "timeSlots": "MTWTF,START,08:00,END,15:00,PERIOD,60,S,START,08:00,END,13:00,PERIOD,60,SKIPHR-336",
        "transportQuestion2": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/dropOffWaitorRide.ogg\">Would you like to drop off your vehicle, wait at the dealership, or would you need a ride?</audio>",
        "apiName": "apiReturnsCustomerName",
        "customerPhone2": "4047477338",
        "businessPhone": "",
        "advisorEmail.original": "",
        "transportQuestion2.original": "",
        "smsMessage": "[Regal Nissan]  \n4047477338",
        "advisorNumber": "380",
        "anyURL.original": ""
      }
    },
    {
      "lifespanCount": 1,
      "name": "noname-followup",
      "parameters": {
        "smsMessage": "[Regal Nissan]  \n4047477338",
        "advisorNumber.original": "",
        "make": "Nissan",
        "businessPhone.original": "",
        "fallbackService.original": "",
        "example": "Altima",
        "anyURL.original": "",
        "smsFromNumber.original": "",
        "hoursLocation": "We are located at 1090 Holcomb Bridge Rd\nRoswell. Our service department hours are, 7 AM to 6 PM, Monday through Friday; and\n8 AM to 4 PM on Saturday",
        "fallbackService": "GM",
        "smsMessage.original": "",
        "make.original": "",
        "businessName.original": "",
        "smsPhoneNumber.original": "",
        "book_url.original": "",
        "example.original": "",
        "businessName": "Regal Nissan",
        "book_url": "https://h2qllp9qmd.execute-api.us-east-1.amazonaws.com/dealerlogix/book?id=REGALNISSAN&dealer=2387/895c4f4cf35cd7aa",
        "greeting": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/0-ClientGreetings/ClientRegal2.ogg\">\nWelcome to Regal Nissan Service Department. This is Allio, your digital assistant. I can book appointments or get you the help you need\n</audio>",
        "email.original": "",
        "WeekOpenCloseSatOpenClose.original": "",
        "hoursLocation.original": "",
        "customerPhone2": "4047477338",
        "prompt.original": "",
        "recallService": "RECALL",
        "prompt": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/S-PleaseSayMakeApptOrOther.ogg\">\nPlease say make appointment or say other</audio>",
        "transportQuestion2": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/dropOffWaitorRide.ogg\">Would you like to drop off your vehicle, wait at the dealership, or would you need a ride?</audio>",
        "smsFromNumber": "",
        "advisorEmail": "booking@allio.io",
        "anyURL": "https://eu-west-1.aws.data.mongodb-api.com/app/application-2-febnp/endpoint/sendSlackNotification?channel=aibdc&message=Regal Nissan: 4047477338",
        "email": "",
        "customerPhone.original": "",
        "check_url": "https://h2qllp9qmd.execute-api.us-east-1.amazonaws.com/dealerlogix/check?id=REGALNISSAN&brand=Nissan&dealer=2387/895c4f4cf35cd7aa",
        "WeekOpenCloseSatOpenClose": "4:00,15:00,5:00,13:00",
        "check_url.original": "",
        "customerName.original": "",
        "advisorEmail.original": "",
        "smsPhoneNumber": "6506900634",
        "apiName.original": "",
        "greeting.original": "",
        "timeSlots.original": "",
        "customerPhone2.original": "",
        "advisorNumber": "380",
        "customerName": "Unknown",
        "businessPhone": "",
        "transportQuestion2.original": "",
        "apiName": "apiReturnsCustomerName",
        "recallService.original": "",
        "timeSlots": "MTWTF,START,08:00,END,15:00,PERIOD,60,S,START,08:00,END,13:00,PERIOD,60,SKIPHR-336",
        "customerPhone": "6506900634"
      }
    },
    {
      "lifespanCount": 98,
      "name": "config",
      "parameters": {
        "apiName.original": "",
        "lastFourDigits": "7 3 3 8",
        "businessPhone": "",
        "hoursLocation": "We are located at 1090 Holcomb Bridge Rd\nRoswell. Our service department hours are, 7 AM to 6 PM, Monday through Friday; and\n8 AM to 4 PM on Saturday",
        "smsPhoneNumber.original": "",
        "book_url.original": "",
        "Caller_Type": "a Call",
        "userInput": "2022-10-31T15:50:28-05:00_2-NoName_NoName",
        "WeekOpenCloseSatOpenClose": "4:00,15:00,5:00,13:00",
        "check_url.original": "",
        "advisorNumber": "380",
        "prompt": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/S-PleaseSayMakeApptOrOther.ogg\">\nPlease say make appointment or say other</audio>",
        "transportQuestion2.original": "",
        "recallService": "RECALL",
        "smsFromNumber.original": "",
        "fallbackService.original": "",
        "book_url": "https://h2qllp9qmd.execute-api.us-east-1.amazonaws.com/dealerlogix/book?id=REGALNISSAN&dealer=2387/895c4f4cf35cd7aa",
        "customerPhone2": "4047477338",
        "customerName": "Unknown",
        "businessName": "Regal Nissan",
        "email.original": "",
        "greeting": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/0-ClientGreetings/ClientRegal2.ogg\">\nWelcome to Regal Nissan Service Department. This is Allio, your digital assistant. I can book appointments or get you the help you need\n</audio>",
        "smsMessage": "[Regal Nissan]  \n4047477338",
        "timeSlots.original": "",
        "apiName": "apiReturnsCustomerName",
        "email": "",
        "lastUserInput2": "",
        "customerPhone2.original": "",
        "businessPhone.original": "",
        "smsFromNumber": "",
        "advisorNumber.original": "",
        "transportQuestion2": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/dropOffWaitorRide.ogg\">Would you like to drop off your vehicle, wait at the dealership, or would you need a ride?</audio>",
        "example.original": "",
        "check_url": "https://h2qllp9qmd.execute-api.us-east-1.amazonaws.com/dealerlogix/check?id=REGALNISSAN&brand=Nissan&dealer=2387/895c4f4cf35cd7aa",
        "FULLNAME_FOUND": false,
        "lastUserInput": "",
        "make.original": "",
        "hoursLocation.original": "",
        "customerName.original": "",
        "businessName.original": "",
        "advisorEmail": "booking@allio.io",
        "advisorEmail.original": "",
        "anyURL": "https://eu-west-1.aws.data.mongodb-api.com/app/application-2-febnp/endpoint/sendSlackNotification?channel=aibdc&message=Regal Nissan: 4047477338",
        "readablePhone": "404 747 7338",
        "smsMessage.original": "",
        "example": "Altima",
        "WeekOpenCloseSatOpenClose.original": "",
        "anyURL.original": "",
        "readPhoneNum": "(404) 747-7338",
        "recallService.original": "",
        "greeting.original": "",
        "firstName": "",
        "customerPhone.original": "",
        "timeSlots": "MTWTF,START,08:00,END,15:00,PERIOD,60,S,START,08:00,END,13:00,PERIOD,60,SKIPHR-336",
        "prompt.original": "",
        "lastName": "",
        "smsPhoneNumber": "6506900634",
        "customerPhone": "4047477338",
        "fallbackService": "GM",
        "YMM_FOUND": false,
        "make": "Nissan"
      }
    },
    {
      "lifespanCount": 98,
      "name": "adhoc",
      "parameters": {
        "greeting.original": "",
        "transportQuestion2.original": "",
        "book_url.original": "",
        "advisorNumber.original": "",
        "prompt": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/S-PleaseSayMakeApptOrOther.ogg\">\nPlease say make appointment or say other</audio>",
        "make.original": "",
        "timeSlots": "MTWTF,START,08:00,END,15:00,PERIOD,60,S,START,08:00,END,13:00,PERIOD,60,SKIPHR-336",
        "hoursLocation.original": "",
        "timeSlots.original": "",
        "make": "Nissan",
        "customerPhone2.original": "",
        "check_url.original": "",
        "greeting": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/0-ClientGreetings/ClientRegal2.ogg\">\nWelcome to Regal Nissan Service Department. This is Allio, your digital assistant. I can book appointments or get you the help you need\n</audio>",
        "customerName.original": "",
        "check_url": "https://h2qllp9qmd.execute-api.us-east-1.amazonaws.com/dealerlogix/check?id=REGALNISSAN&brand=Nissan&dealer=2387/895c4f4cf35cd7aa",
        "example.original": "",
        "smsPhoneNumber.original": "",
        "WeekOpenCloseSatOpenClose": "4:00,15:00,5:00,13:00",
        "email.original": "",
        "fallbackService": "GM",
        "recallService.original": "",
        "apiName": "apiReturnsCustomerName",
        "customerPhone2": "4047477338",
        "apiName.original": "",
        "anyURL.original": "",
        "businessPhone.original": "",
        "advisorNumber": "380",
        "businessName.original": "",
        "customerName": "Unknown",
        "transportQuestion2": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/dropOffWaitorRide.ogg\">Would you like to drop off your vehicle, wait at the dealership, or would you need a ride?</audio>",
        "customerPhone": "6506900634",
        "book_url": "https://h2qllp9qmd.execute-api.us-east-1.amazonaws.com/dealerlogix/book?id=REGALNISSAN&dealer=2387/895c4f4cf35cd7aa",
        "hoursLocation": "We are located at 1090 Holcomb Bridge Rd\nRoswell. Our service department hours are, 7 AM to 6 PM, Monday through Friday; and\n8 AM to 4 PM on Saturday",
        "smsMessage": "[Regal Nissan]  \n4047477338",
        "advisorEmail.original": "",
        "smsFromNumber.original": "",
        "advisorEmail": "booking@allio.io",
        "email": "",
        "businessName": "Regal Nissan",
        "prompt.original": "",
        "smsPhoneNumber": "6506900634",
        "customerPhone.original": "",
        "fallbackService.original": "",
        "example": "Altima",
        "smsMessage.original": "",
        "smsFromNumber": "",
        "businessPhone": "",
        "WeekOpenCloseSatOpenClose.original": "",
        "anyURL": "https://eu-west-1.aws.data.mongodb-api.com/app/application-2-febnp/endpoint/sendSlackNotification?channel=aibdc&message=Regal Nissan: 4047477338",
        "recallService": "RECALL"
      }
    },
    {
      "lifespanCount": 98,
      "name": "dropin",
      "parameters": {
        "advisorNumber": "380",
        "hoursLocation": "We are located at 1090 Holcomb Bridge Rd\nRoswell. Our service department hours are, 7 AM to 6 PM, Monday through Friday; and\n8 AM to 4 PM on Saturday",
        "check_url.original": "",
        "customerName.original": "",
        "fallbackService": "GM",
        "timeSlots.original": "",
        "customerPhone": "6506900634",
        "email.original": "",
        "hoursLocation.original": "",
        "smsMessage": "[Regal Nissan]  \n4047477338",
        "apiName": "apiReturnsCustomerName",
        "prompt": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/S-PleaseSayMakeApptOrOther.ogg\">\nPlease say make appointment or say other</audio>",
        "smsMessage.original": "",
        "smsFromNumber.original": "",
        "example.original": "",
        "customerPhone2.original": "",
        "transportQuestion2": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/dropOffWaitorRide.ogg\">Would you like to drop off your vehicle, wait at the dealership, or would you need a ride?</audio>",
        "anyURL.original": "",
        "fallbackService.original": "",
        "book_url": "https://h2qllp9qmd.execute-api.us-east-1.amazonaws.com/dealerlogix/book?id=REGALNISSAN&dealer=2387/895c4f4cf35cd7aa",
        "example": "Altima",
        "make.original": "",
        "WeekOpenCloseSatOpenClose.original": "",
        "anyURL": "https://eu-west-1.aws.data.mongodb-api.com/app/application-2-febnp/endpoint/sendSlackNotification?channel=aibdc&message=Regal Nissan: 4047477338",
        "apiName.original": "",
        "timeSlots": "MTWTF,START,08:00,END,15:00,PERIOD,60,S,START,08:00,END,13:00,PERIOD,60,SKIPHR-336",
        "prompt.original": "",
        "advisorEmail.original": "",
        "smsPhoneNumber.original": "",
        "advisorEmail": "booking@allio.io",
        "customerPhone.original": "",
        "greeting": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/0-ClientGreetings/ClientRegal2.ogg\">\nWelcome to Regal Nissan Service Department. This is Allio, your digital assistant. I can book appointments or get you the help you need\n</audio>",
        "greeting.original": "",
        "businessName.original": "",
        "recallService": "RECALL",
        "transportQuestion2.original": "",
        "customerName": "Unknown",
        "smsFromNumber": "",
        "businessName": "Regal Nissan",
        "recallService.original": "",
        "customerPhone2": "4047477338",
        "email": "",
        "WeekOpenCloseSatOpenClose": "4:00,15:00,5:00,13:00",
        "book_url.original": "",
        "advisorNumber.original": "",
        "businessPhone.original": "",
        "check_url": "https://h2qllp9qmd.execute-api.us-east-1.amazonaws.com/dealerlogix/check?id=REGALNISSAN&brand=Nissan&dealer=2387/895c4f4cf35cd7aa",
        "smsPhoneNumber": "6506900634",
        "businessPhone": "",
        "make": "Nissan"
      }
    },
    {
      "lifespanCount": 98,
      "name": "norecall",
      "parameters": {
        "email.original": "",
        "customerPhone.original": "",
        "customerPhone2.original": "",
        "book_url": "https://h2qllp9qmd.execute-api.us-east-1.amazonaws.com/dealerlogix/book?id=REGALNISSAN&dealer=2387/895c4f4cf35cd7aa",
        "transportQuestion2": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/dropOffWaitorRide.ogg\">Would you like to drop off your vehicle, wait at the dealership, or would you need a ride?</audio>",
        "customerPhone": "6506900634",
        "smsPhoneNumber.original": "",
        "fallbackService.original": "",
        "email": "",
        "smsMessage.original": "",
        "prompt": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/S-PleaseSayMakeApptOrOther.ogg\">\nPlease say make appointment or say other</audio>",
        "transportQuestion2.original": "",
        "greeting.original": "",
        "make.original": "",
        "recallService": "RECALL",
        "smsFromNumber.original": "",
        "advisorEmail": "booking@allio.io",
        "book_url.original": "",
        "greeting": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/0-ClientGreetings/ClientRegal2.ogg\">\nWelcome to Regal Nissan Service Department. This is Allio, your digital assistant. I can book appointments or get you the help you need\n</audio>",
        "smsPhoneNumber": "6506900634",
        "fallbackService": "GM",
        "businessPhone.original": "",
        "example.original": "",
        "customerName.original": "",
        "hoursLocation": "We are located at 1090 Holcomb Bridge Rd\nRoswell. Our service department hours are, 7 AM to 6 PM, Monday through Friday; and\n8 AM to 4 PM on Saturday",
        "apiName.original": "",
        "check_url": "https://h2qllp9qmd.execute-api.us-east-1.amazonaws.com/dealerlogix/check?id=REGALNISSAN&brand=Nissan&dealer=2387/895c4f4cf35cd7aa",
        "smsFromNumber": "",
        "hoursLocation.original": "",
        "make": "Nissan",
        "WeekOpenCloseSatOpenClose.original": "",
        "recallService.original": "",
        "businessName.original": "",
        "prompt.original": "",
        "apiName": "apiReturnsCustomerName",
        "anyURL": "https://eu-west-1.aws.data.mongodb-api.com/app/application-2-febnp/endpoint/sendSlackNotification?channel=aibdc&message=Regal Nissan: 4047477338",
        "advisorNumber": "380",
        "customerName": "Unknown",
        "businessPhone": "",
        "example": "Altima",
        "customerPhone2": "4047477338",
        "smsMessage": "[Regal Nissan]  \n4047477338",
        "timeSlots.original": "",
        "advisorNumber.original": "",
        "businessName": "Regal Nissan",
        "advisorEmail.original": "",
        "timeSlots": "MTWTF,START,08:00,END,15:00,PERIOD,60,S,START,08:00,END,13:00,PERIOD,60,SKIPHR-336",
        "anyURL.original": "",
        "check_url.original": "",
        "WeekOpenCloseSatOpenClose": "4:00,15:00,5:00,13:00"
      }
    },
    {
      "lifespanCount": 98,
      "name": "compressed",
      "parameters": {
        "timeSlots.original": "",
        "advisorNumber.original": "",
        "prompt.original": "",
        "businessPhone.original": "",
        "greeting": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/0-ClientGreetings/ClientRegal2.ogg\">\nWelcome to Regal Nissan Service Department. This is Allio, your digital assistant. I can book appointments or get you the help you need\n</audio>",
        "smsMessage": "[Regal Nissan]  \n4047477338",
        "customerPhone2.original": "",
        "email": "",
        "customerName": "Unknown",
        "make.original": "",
        "transportQuestion2": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/dropOffWaitorRide.ogg\">Would you like to drop off your vehicle, wait at the dealership, or would you need a ride?</audio>",
        "smsFromNumber": "",
        "smsMessage.original": "",
        "advisorEmail": "booking@allio.io",
        "hoursLocation.original": "",
        "smsPhoneNumber.original": "",
        "smsFromNumber.original": "",
        "timeSlots": "MTWTF,START,08:00,END,15:00,PERIOD,60,S,START,08:00,END,13:00,PERIOD,60,SKIPHR-336",
        "customerName.original": "",
        "anyURL": "https://eu-west-1.aws.data.mongodb-api.com/app/application-2-febnp/endpoint/sendSlackNotification?channel=aibdc&message=Regal Nissan: 4047477338",
        "advisorEmail.original": "",
        "email.original": "",
        "apiName": "apiReturnsCustomerName",
        "businessPhone": "",
        "recallService.original": "",
        "recallService": "RECALL",
        "smsPhoneNumber": "6506900634",
        "book_url.original": "",
        "example": "Altima",
        "customerPhone2": "4047477338",
        "check_url.original": "",
        "customerPhone.original": "",
        "fallbackService": "GM",
        "example.original": "",
        "apiName.original": "",
        "transportQuestion2.original": "",
        "WeekOpenCloseSatOpenClose": "4:00,15:00,5:00,13:00",
        "anyURL.original": "",
        "prompt": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/S-PleaseSayMakeApptOrOther.ogg\">\nPlease say make appointment or say other</audio>",
        "check_url": "https://h2qllp9qmd.execute-api.us-east-1.amazonaws.com/dealerlogix/check?id=REGALNISSAN&brand=Nissan&dealer=2387/895c4f4cf35cd7aa",
        "businessName.original": "",
        "fallbackService.original": "",
        "make": "Nissan",
        "businessName": "Regal Nissan",
        "hoursLocation": "We are located at 1090 Holcomb Bridge Rd\nRoswell. Our service department hours are, 7 AM to 6 PM, Monday through Friday; and\n8 AM to 4 PM on Saturday",
        "customerPhone": "6506900634",
        "book_url": "https://h2qllp9qmd.execute-api.us-east-1.amazonaws.com/dealerlogix/book?id=REGALNISSAN&dealer=2387/895c4f4cf35cd7aa",
        "greeting.original": "",
        "advisorNumber": "380",
        "WeekOpenCloseSatOpenClose.original": ""
      }
    },
    {
      "lifespanCount": 98,
      "name": "transfervm",
      "parameters": {
        "greeting": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/0-ClientGreetings/ClientRegal2.ogg\">\nWelcome to Regal Nissan Service Department. This is Allio, your digital assistant. I can book appointments or get you the help you need\n</audio>",
        "greeting.original": "",
        "customerPhone2.original": "",
        "make": "Nissan",
        "smsFromNumber.original": "",
        "advisorNumber.original": "",
        "businessPhone.original": "",
        "customerPhone.original": "",
        "book_url.original": "",
        "anyURL.original": "",
        "prompt.original": "",
        "hoursLocation.original": "",
        "customerName.original": "",
        "make.original": "",
        "timeSlots.original": "",
        "customerName": "Unknown",
        "example.original": "",
        "email": "",
        "customerPhone2": "4047477338",
        "example": "Altima",
        "apiName": "apiReturnsCustomerName",
        "smsPhoneNumber": "6506900634",
        "recallService.original": "",
        "recallService": "RECALL",
        "businessPhone": "",
        "check_url.original": "",
        "check_url": "https://h2qllp9qmd.execute-api.us-east-1.amazonaws.com/dealerlogix/check?id=REGALNISSAN&brand=Nissan&dealer=2387/895c4f4cf35cd7aa",
        "anyURL": "https://eu-west-1.aws.data.mongodb-api.com/app/application-2-febnp/endpoint/sendSlackNotification?channel=aibdc&message=Regal Nissan: 4047477338",
        "businessName.original": "",
        "businessName": "Regal Nissan",
        "customerPhone": "6506900634",
        "fallbackService": "GM",
        "WeekOpenCloseSatOpenClose": "4:00,15:00,5:00,13:00",
        "advisorNumber": "380",
        "WeekOpenCloseSatOpenClose.original": "",
        "smsMessage.original": "",
        "book_url": "https://h2qllp9qmd.execute-api.us-east-1.amazonaws.com/dealerlogix/book?id=REGALNISSAN&dealer=2387/895c4f4cf35cd7aa",
        "fallbackService.original": "",
        "apiName.original": "",
        "advisorEmail": "booking@allio.io",
        "transportQuestion2": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/dropOffWaitorRide.ogg\">Would you like to drop off your vehicle, wait at the dealership, or would you need a ride?</audio>",
        "prompt": "<audio soundLevel=\"+15dB\" src=\"https://storage.googleapis.com/autoserviceai/S-PleaseSayMakeApptOrOther.ogg\">\nPlease say make appointment or say other</audio>",
        "email.original": "",
        "hoursLocation": "We are located at 1090 Holcomb Bridge Rd\nRoswell. Our service department hours are, 7 AM to 6 PM, Monday through Friday; and\n8 AM to 4 PM on Saturday",
        "smsPhoneNumber.original": "",
        "transportQuestion2.original": "",
        "smsMessage": "[Regal Nissan]  \n4047477338",
        "smsFromNumber": "",
        "advisorEmail.original": "",
        "timeSlots": "MTWTF,START,08:00,END,15:00,PERIOD,60,S,START,08:00,END,13:00,PERIOD,60,SKIPHR-336"
      }
    }
  ],
  "intent": {
    "isFallback": false,
    "displayName": "2-NoName",
    "id": "9dde76dc-51e4-4365-8be1-7edc85da6428"
  },
  "followupEventInfo": {
    "executionSequence": [
      {
        "source": "agent",
        "intentId": "9ae39238-edc1-45bf-8797-d2f60bf87403",
        "intentName": "--0-RegalNissanBDC",
        "action": "get_name_ymm",
        "webhookUsed": true,
        "webhookTriggeringEvent": "NoName",
        "webhookResponseTime": 975,
        "agentId": "601d6596-1166-423b-9d74-e696b5ae6c56"
      },
      {
        "source": "agent",
        "intentId": "9dde76dc-51e4-4365-8be1-7edc85da6428",
        "intentName": "2-NoName",
        "action": "my_tools2",
        "webhookUsed": true,
        "webhookResponseTime": 85,
        "agentId": "601d6596-1166-423b-9d74-e696b5ae6c56"
      }
    ]
  }
}
const {
    GoogleSpreadsheet
} = require('google-spreadsheet');
const CREDENTIALS = require('./sheets.json');
const RESPONSES_SHEET_ID = '1gza3a05wWV4bt7c9pMyJsm43hpbCpPx84Uctym2zjOg';
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);

let b = a.outputContexts
let c  = b.find((item) => item.name === 'config')
let d = c.lastFourDigits;
let e = c.hoursLocation;
let f = c.greeting;
let g = c.smsMessage;
let h = c.advisorEmail;
let i = c.readablePhone;

//get all keys from c 
let keys = Object.keys(c);

let pz = c.parameters;
let keys2 = Object.keys(pz);
let allKeys = keys.concat(keys2);

async function ab(){
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle['Sheet49'];
    // add header row
    await sheet.setHeaderRow(allKeys);
}
// remove parameters from c
delete c.parameters;
// merge all keys into one object
let obj = Object.assign({}, c, pz);
//console.log(obj);

let p = a.action;
let q = a.fulfillmentText
q = q.replace(/<[^>]*>?/gm, '');
q = q.replace(/&nbsp;/g, ' ');
console.log(q);
console.log(p);
let r = a.outputContexts;
// get all names from r
let names = r.map((item) => item.name);
// names to string
let namesString = names.join(', ');
console.log(namesString);