import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';
export default function PaymentMidtrans() {
  const route = useRoute();
  const { data } = route.params;
  console.log(data.midtransToken, 'ini dari payment midtrans <<<<<<');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: data?.midtransToken?.redirect_url,
        }}
      />
    </SafeAreaView>
  );
}
