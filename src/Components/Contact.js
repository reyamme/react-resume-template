import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class Contact extends Component {

   render() {

      // if (this.props.data) {
      //    var name = this.props.data.name;
      //    var street = this.props.data.address.street;
      //    var city = this.props.data.address.city;
      //    var state = this.props.data.address.state;
      //    var zip = this.props.data.address.zip;
      //    var phone = this.props.data.phone;
      //    var email = this.props.data.email;
      //    var message = this.props.data.contactmessage;
      // }

      return (
         <section id="contact">
            <div className='chatbot'>

               <ChatBot
                  headerTitle="Chat with my virtual assistant "
                  recognitionEnable={true}
                  steps={[
                     {
                        id: '1',
                        message: 'Hello, I am a robot built by Reyam, what is your name? ',
                        trigger: '2',
                     },
                     {
                        id: '2',
                        user: true,
                        trigger: '3',
                     },
                     {
                        id: '3',
                        message: 'Hi {previousValue}, nice to meet you! how can I help you',
                        trigger: '4',
                     },
                     {
                        id: '4',
                        options: [
                           { value: 1, label: 'Who is Reyam?', trigger: '5' },
                           { value: 2, label: 'How old is she?', trigger: '6' },
                           { value: 3, label: 'is she a writer?', trigger: '7' },
                           { value: 4, label: 'Data scientist or Web developer?', trigger: '8' },
                           { value: 5, label: 'Any programming language', trigger: '9' },
                           { value: 6, label: 'where is she live?', trigger: '10' },
                        ],
                     },
                     {
                        id: '5',
                        message: 'she did a master degree in Artificial Intelligence and a Bachelor degree in Computer Engineering, also she is a writer and activist ',
                        trigger: '11',
                     },
                     {
                        id: '6',
                        message: 'She born in Baghadad in 15/01/1991',
                        trigger: '11',

                     },
                     {
                        id: '7',
                        message: 'she is a writer and she has a blog and she published a novel about women in Middle East',
                        trigger: '11',
                     },
                     {
                        id: '8',
                        message: 'she has experience in web development (ASP.net, JS, React,etc,  databases) and also she like a lot Machine learning and Data science',
                        trigger: '11',
                     },
                     {
                        id: '9',
                        message: 'Python, JS, React, C#, Postgress, SQL, HTML, CSS, R language, Netlify, Gatsby, firebase, Git, Terminal',
                        trigger: '11',
                     },
                     {
                        id: '10',
                        message: 'United Kingdom',
                        trigger: '11',

                     },
                     {
                        id: '11',
                        options: [
                           { value: 1, label: 'Do you need to know more?', trigger: '4' },
                           { value: 2, label: 'End our chat', trigger: '12' },
                        ]
                     },
                     {
                        id: '12',
                        message: 'It was my pleasre talking with you! see you soon '
                     }

                  ]}
               />
            </div>
         </section>
      );
   }
}

export default Contact;
