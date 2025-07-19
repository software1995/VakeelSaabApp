import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

// Simple chat message component
const ChatMessage = ({ message, isUser }) => (
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
    return (
      <View style={[
        styles.messageContainer,
        isUser ? styles.userMessageContainer : styles.otherMessageContainer
      ]}>
        <ChatMessage message={item} isUser={isUser} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButtonSmall}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonTextSmall}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{lawyer.name}</Text>
        <View style={styles.statusIndicatorSmall}>
          <View style={[
            styles.indicator, 
            { backgroundColor: lawyer.status === 'online' ? '#4CAF50' : '#9E9E9E' }
          ]} />
        </View>
      </View>
      
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
        />
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type a message..."
            multiline
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#2196F3',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  backButtonSmall: {
    padding: 5,
  },
  backButtonTextSmall: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  statusIndicatorSmall: {
    padding: 5,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  chatContainer: {
    flex: 1,
  },
  messagesContainer: {
    padding: 10,
    paddingBottom: 20,
  },
  messageContainer: {
    marginVertical: 5,
    maxWidth: '80%',
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
  },
  otherMessageContainer: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    padding: 10,
    borderRadius: 15,
    minWidth: 80,
  },
  userBubble: {
    backgroundColor: '#2196F3',
  },
  otherBubble: {
    backgroundColor: '#E8EAF6',
  },
  messageText: {
    fontSize: 16,
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
    paddingVertical: 8,
    maxHeight: 100,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#2196F3',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#cccccc',
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ChatScreen;
