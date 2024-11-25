import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+919630107798&text=Hi,%20I%20am%20looking%20for%20travel%20package,%20can%20you%20help%20me?"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366', // WhatsApp green color
        padding: '10px 15px',
        borderRadius: '50px', // Capsule shape
        display: 'flex',
        alignItems: 'center', // Align icon and text vertically
        justifyContent: 'center',
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '16px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000, // Ensures the button is on top of other content
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="white"
        viewBox="0 0 24 24"
        style={{ marginRight: '8px' }} // Space between icon and text
      >
        <path d="M12.001 1.5c-5.799 0-10.5 4.702-10.5 10.5 0 1.852.478 3.665 1.383 5.276l-1.429 4.218 4.336-1.418c1.566.845 3.326 1.288 5.188 1.288 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5zm0 19c-1.713 0-3.374-.444-4.843-1.285l-.347-.192-2.574.842.848-2.495-.198-.356c-.836-1.506-1.286-3.22-1.286-4.957 0-5.243 4.257-9.5 9.5-9.5 5.243 0 9.5 4.257 9.5 9.5 0 5.243-4.257 9.5-9.5 9.5zm4.657-7.385c-.257-.129-1.525-.754-1.76-.839-.236-.085-.41-.129-.584.129s-.671.839-.823 1.011c-.151.171-.301.193-.557.064-.257-.129-1.085-.4-2.067-1.271-.764-.679-1.28-1.517-1.433-1.774-.151-.257-.016-.396.113-.525.116-.115.257-.301.385-.451.129-.151.172-.257.258-.43.086-.172.043-.322-.021-.451-.065-.129-.584-1.408-.8-1.931-.209-.502-.422-.434-.584-.443h-.501c-.151 0-.396.057-.605.28-.208.222-.79.77-.79 1.878 0 1.108.81 2.181.922 2.335.113.151 1.591 2.429 3.859 3.406.541.234.964.373 1.293.479.543.172 1.037.148 1.429.093.436-.064 1.526-.623 1.742-1.223.214-.6.214-1.115.151-1.223-.064-.107-.236-.172-.493-.301z" />
      </svg>
      WHATSAPP
    </a>
  );
};

export default WhatsAppButton;
