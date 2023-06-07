import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AuctionScreen = () => {
  const [bidAmount, setBidAmount] = useState('');
  const [isWinningBid, setIsWinningBid] = useState(false);

  const handleSubmitBid = () => {// Handle bid submission logic here
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Diamond Necklace</Text>
      <Text style={styles.currentBid}>Current High Bid: $5000</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} keyboardType="numeric" placeholder="Enter bid amount in USD" value={bidAmount} onChangeText={setBidAmount} />
        {isWinningBid && <Image style={styles.winningIcon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmitBid}>
        <Text style={styles.submitButtonText}>Submit Bid</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  currentBid: {
    fontSize: 18,
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    width: 200
  },
  winningIcon: {
    width: 30,
    height: 30
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  submitButtonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});
export default AuctionScreen;