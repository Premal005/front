import React, { useEffect } from 'react';

const BotPressChat = () => {
  useEffect(() => {
    // Dynamically add the BotPress webchat script
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    // Dynamically add the bot's configuration script
    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2025/02/13/16/20250213162008-P7SC9EZC.js';
    script2.async = true;
    document.body.appendChild(script2);

    // Cleanup by removing the scripts when the component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null; // No UI element to render, scripts will be dynamically loaded
};

export default BotPressChat;
