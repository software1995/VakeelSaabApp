import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../../utils/Header';

// Improved chat message component
const ChatMessage = ({ message, isUser }) => (
  <View style={[
    styles.messageContainer,
    isUser ? styles.userMessageContainer : styles.otherMessageContainer
  ]}>
    {!isUser && (
      <Text style={styles.senderName}>{message.user.name}</Text>
    )}
    <View style={[
      styles.messageBubble,
      isUser ? styles.userBubble : styles.otherBubble
    ]}>
      <Text style={[
        styles.messageText,
        isUser ? styles.userMessageText : styles.otherMessageText
      ]}>
        {message.text}
      </Text>
      <Text style={[
        styles.timeText,
        isUser ? styles.userTimeText : styles.otherTimeText
      ]}>
        {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </Text>
    </View>
  </View>
);

const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { lawyer } = route.params;
  
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const flatListRef = React.useRef();

  // Prepare dummy responses
  const dummyResponses = [
    "Thanks for your message. How can I help with your legal issue today?",
    "That's an interesting question. In most similar cases, clients have several options.",
    "I understand your concern. Have you already taken any steps regarding this matter?",
    "Let me explain the legal implications of this situation...",
    "Based on what you've shared, I'd recommend we first look at...",
    "You might want to consider filing the necessary paperwork before proceeding.",
    "I've worked on several similar cases, and typically the courts have ruled...",
    "Do you have any documentation related to this incident that you can share?",
    "Let me know if you need further clarification on any of these points.",
    "Would you like to schedule a formal consultation to discuss this in more detail?"
  ];

  // Add welcome message when component mounts
  useEffect(() => {
    const welcomeMessage = {
      id: Date.now(),
      text: `Hello! I'm ${lawyer.name}, a ${lawyer.specialization} specialist. How can I assist you today?`,
      createdAt: new Date(),
      user: {
        id: lawyer.id,
        name: lawyer.name,
      }
    };
    
    setMessages([welcomeMessage]);
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (flatListRef.current && messages.length > 0) {
      setTimeout(() => {
        flatListRef.current.scrollToEnd({ animated: true });
      }, 200);
    }
  }, [messages]);

  // Send a message
  const handleSend = () => {
    if (inputText.trim() === '') return;
    
    // Create user message
    const userMessage = {
      id: Date.now(),
      text: inputText.trim(),
      createdAt: new Date(),
      user: {
        id: 'user',
        name: 'You',
      }
    };
    
    // Add user message to chat
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText('');
    
    // Simulate lawyer response after a delay
    setTimeout(() => {
      const randomResponse = dummyResponses[Math.floor(Math.random() * dummyResponses.length)];
      const lawyerMessage = {
        id: Date.now(),
        text: randomResponse,
        createdAt: new Date(),
        user: {
          id: lawyer.id,
          name: lawyer.name,
        }
      };
      
      setMessages(prevMessages => [...prevMessages, lawyerMessage]);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  // Render a chat message
  const renderMessage = ({ item }) => {
    const isUser = item.user.id === 'user';
    return <ChatMessage message={item} isUser={isUser} />;
  };

  // Create a status indicator component
  const statusIndicator = (
    <View style={styles.statusIndicator}>
      <View style={[
        styles.indicator, 
        { backgroundColor: lawyer.status === 'online' ? '#4CAF50' : '#9E9E9E' }
      ]} />
      <Text style={styles.statusText}>
        {lawyer.status === 'online' ? 'Online' : 'Offline'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Use the shared Header component with status indicator */}
      <Header
        HeaderTxt={lawyer.name} 
        showBackButton={true} 
        rightComponent={statusIndicator}
      />
      
      <KeyboardAvoidingView
        style={styles.chatContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.messagesContainer}
          showsVerticalScrollIndicator={false}
        />
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type a message..."
            placeholderTextColor="#140d0dff"  
            multiline
            maxLength={1000} // Prevent extremely long messages
          />
          <TouchableOpacity 
            style={[
              styles.sendButton,
              !inputText.trim() ? styles.sendButtonDisabled : null
            ]} 
            onPress={handleSend}
            disabled={!inputText.trim()}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  chatContainer: {
    flex: 1,
  },
  messagesContainer: {
    padding: 10,
    paddingBottom: 20,
  },
  messageContainer: {
    marginVertical: 8, // More vertical spacing between messages
    maxWidth: '80%',
  },
  senderName: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 2,
    marginLeft: 12,
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
  },
  otherMessageContainer: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    padding: 12, 
    borderRadius: 18,
    minWidth: 80,
    maxWidth: '100%', 
  },
  userBubble: {
    backgroundColor: '#2196F3',
    borderBottomRightRadius: 4, 
  },
  otherBubble: {
    backgroundColor: '#E8EAF6',
    borderBottomLeftRadius: 4, 
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.2,
  },
  userMessageText: {
    color: 'white',
  },
  otherMessageText: {
    color: '#333',
  },
  timeText: {
    fontSize: 10,
    marginTop: 4,
    opacity: 0.7,
    alignSelf: 'flex-end',
  },
  userTimeText: {
    color: '#E1F5FE',
  },
  otherTimeText: {
    color: '#9E9E9E',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10, 
    paddingTop: 10, 
    paddingBottom: 10, 
    fontSize: 16, 
    maxHeight: 100,
    minHeight: 40, 
    borderColor:'gray'
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#2196F3',
    borderRadius: 20,
    paddingVertical: 10, 
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end', 
  },
  sendButtonDisabled: {
    backgroundColor: '#cccccc',
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16, 
    fontWeight: '600',
  },
});

export default ChatScreen;