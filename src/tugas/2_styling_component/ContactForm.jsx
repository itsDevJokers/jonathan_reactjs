import React, { Component } from 'react'

export class ContactForm extends Component {
  render() {
    return (
            <div class="pb-10 pt-2 bg-[#cacaca]" id="contact">
                <h3 class="font-bold text-3xl py-8 text-center">CONTACT ME</h3>
                <div class="sm:w-[500px] xs:w-[350px] rounded-lg mx-auto px-2 py-3 bg-gray-100 border border-light">
                    <div class="flex flex-col mb-3">
                        <label for="exampleFormControlInput1" class="pb-3 sm:text-lg xs:text-sm">Name:</label>
                        <input type="name" class="bg-gray-100 border border-gray-300 rounded-sm pl-2 py-2 sm:text-lg xs:text-sm" id="exampleFormControlInput1" placeholder="Write your name here.." />
                    </div>
                    <div class="flex flex-col mb-3">
                        <label for="exampleFormControlTextarea1" class="pb-3 sm:text-lg xs:text-sm">Email:</label>
                        <input type="email" class="bg-gray-100 border border-gray-300 rounded-sm pl-2 py-2 sm:text-lg xs:text-sm" id="exampleFormControlInput1" placeholder="Let us know how to contact you back.." />
                    </div>
                    <div class="flex flex-col mb-3">    
                        <label for="exampleFormControlTextarea1" class="pb-3 sm:text-lg xs:text-sm">Message:</label>
                        <textarea placeholder="What would you like to tell us.." class="bg-gray-100 border border-gray-300 rounded-sm pl-2 py-2 sm:text-lg xs:text-sm" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button class="shadow-sm bg-[#009879] text-white px-3 py-2 w-full">
                        Send
                    </button>
                </div>
            </div>
    )
  }
}

export default ContactForm