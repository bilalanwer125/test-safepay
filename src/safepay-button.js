import React, { PureComponent } from 'react';
import SafepayCheckoutComponent from './safepay-react';

export default class SafepayCheckout extends PureComponent {
  static defaultProps = {
      // Choose between "sandbox" or "production"
      // sandbox will allow you to test transactions
      env:"sandbox",
   
      // This amount is meant to be dynamically calculated
      // by your app. It is of type <string>
      amount: "1550.40",
   
      // Safepay currently supports "USD" or "PKR"
      currency: "PKR",
   
      // This is an object containing your API keys.
      // One for "sandbox" and one for "production"
      client: {
        "sandbox": "sec_690bf532-9136-49f2-bbb8-8d99871e3d58",
        "production": "<YOUR PRODUCTION API KEY>"
      },
   
      
   
       // Optionally pass along customer information to 
      // Safepay Checkout to prefill their data
      customer: {
        first_name: "Ziyad",
        last_name: "Parekh",
        email: "ziyad@gmail.com",
        phone: "03008287540"
      },
   
      // Optionally pass along customer billing information
      // to Safepay Checkout to prefill this data
      billing: {
        "name": "Default Address",
        "address_1": "12/1 7th South Street DHA Phase 2",
        "address_2": "",
        "city": "Karachi",
        "province": "Sindh",
        "postal": "75500",
        "country": "PK"
      },
   
      // This is the payment prop called when your customer
      // clicks the Safepay Checkout Button
      payment: (data, actions) => {
        return actions.payment.create({
          transaction: {
            // This amount is meant to be dynamically
            // generated by your system. It is a decimal eg 1200.50
            amount:1200.00,
            // Safepay currently supports "USD" or "PKR"
            currency: 'PKR'
          }
        })
      },
   
      // The buyer cancelled the payment
      // Don't create an order in your system
      onCancel: (data, actions) => {
        console.log(data)
        console.log(actions)
      },
   
      // The buyer successfully posted a payment
      // Take the data object, send it to your backend
      // and create an order in your system.
      onCheckout: (data, actions) => {
        console.log(data)
        console.log("You completed the payment!");
      }
  };

  render() {
    return (
      <SafepayCheckoutComponent { ...SafepayCheckout.defaultProps } />
    )
  }
}