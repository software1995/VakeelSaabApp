class MockWebSocketService {
  constructor() {
    this.callbacks = {};
    this.connected = false;
    this.lawyerId = null;
  }

  connect(lawyerId) {
    this.lawyerId = lawyerId;
    this.connected = true;
    
    if (this.callbacks.onOpen) {
      this.callbacks.onOpen();
    }
    
    // Simulate lawyer responding after user messages
    this.autoResponder = this.setupAutoResponder();
    
    console.log(`Connected to lawyer ID: ${lawyerId}`);
    return this;
  }
  
  // disconnect() {
  //   this.connected = false;
  //   this.lawyerId = null;
    
  //   if (this.autoResponder) {
  //     clearTimeout(this.autoResponder);
  //   }
    
  //   if (this.callbacks.onClose) {
  //     this.callbacks.onClose();
  //   }
    
  //   console.log('Disconnected from chat');
  // }


  // Replace disconnect() with close() for consistency
close() {
  this.connected = false;
  this.lawyerId = null;

  if (this.autoResponder) {
    clearTimeout(this.autoResponder);
  }

  if (this.callbacks.onClose) {
    this.callbacks.onClose();
  }

  console.log('Disconnected from chat');
}

  
  sendMessage(message) {
    if (!this.connected) {
      console.error('Cannot send message: not connected');
      return;
    }
    
    console.log('Message sent:', message);
    
    // Trigger auto-response
    if (this.autoResponder) {
      clearTimeout(this.autoResponder);
      this.autoResponder = this.setupAutoResponder(message);
    }
  }
  
  setupAutoResponder(lastMessage) {
    const responses = [
      "Thank you for your message. How can I assist you with your legal matter today?",
      "I understand your concerns. Could you provide more details about your situation?",
      "That's an interesting legal question. Based on my experience, I would recommend...",
      "Let me look into that for you. In similar cases, I've advised clients to...",
      "Thank you for sharing that information. Have you already taken any steps regarding this matter?"
    ];
    
    return setTimeout(() => {
      if (this.connected && this.callbacks.onMessage) {
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const lawyerMessage = {
          _id: Math.round(Math.random() * 1000000),
          text: randomResponse,
          createdAt: new Date(),
          user: {
            _id: this.lawyerId,
            name: 'Lawyer',
            avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 60) + 1}.jpg`
          }
        };
        
        this.callbacks.onMessage(lawyerMessage);
      }
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  }
  
  onOpen(callback) {
    this.callbacks.onOpen = callback;
    return this;
  }
  
  onMessage(callback) {
    this.callbacks.onMessage = callback;
    return this;
  }
  
  onClose(callback) {
    this.callbacks.onClose = callback;
    return this;
  }
  
  onError(callback) {
    this.callbacks.onError = callback;
    return this;
  }
}

export default new MockWebSocketService();
