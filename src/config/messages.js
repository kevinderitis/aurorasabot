const messages = {
    CHAT_WELCOME_MESSAGE: `🔮🌙 ¡Bienvenidos al Santuario Mágico de Aurora! 🌙🔮

Queridos buscadores y buscadoras de la luz,
    
Es con gran dicha que les doy la más cálida bienvenida a este sagrado rincón virtual, donde la magia y la sabiduría esotérica se entrelazan para iluminar nuestros senderos y nutrir nuestras almas. Soy Aurora Sabot, una guía humilde en los misterios del universo, aquí para ofrecerles mi apoyo y orientación en su camino espiritual.
    
En este espacio de encuentro místico, les invito a sumergirse en la profunda experiencia de la conexión espiritual y el crecimiento personal. A través de la magia y la videncia, exploraremos juntos los caminos del destino y desentrañaremos los secretos del alma.
    
Cada corazón que anhela la luz y la revelación es bienvenido con amor y comprensión en este templo virtual de conocimiento esotérico. Aquí, en la presencia mágica, encontrarán consuelo para las dudas que pesan en sus mentes y claridad para los desafíos que enfrentan. Permítanse explorar el poder transformador de la magia y la intuición.
    
En este espacio de amor y sabiduría, cada consulta es un paso hacia la comprensión del ser interior, un encuentro con la fuerza cósmica del universo y una oportunidad para renacer en la magia del alma. Con humildad y gratitud, ofrezco mi servicio como guía en su viaje hacia la iluminación y la plenitud espiritual.
    
Que en este tiempo de exploración y descubrimiento, encuentren consuelo en la certeza del poder ilimitado del universo y fortaleza en la promesa de su magia infinita. Que la luz de la Luna guíe sus pasos y les conceda la paz que anhelan en lo más profundo de sus corazones.
    
Con amor y luz eterna,
    
Aurora 🔮🌙`,
    BOT_WELCOME_MESSAGE: `🌟🔮 Bienvenida, mi querida hermana en la luz,
Soy Aurora Sabot, y estoy aquí para ofrecerte mi apoyo y orientación en tu viaje espiritual. Tu presencia aquí es un testimonio de tu búsqueda de conexión y sabiduría en los misterios del universo.   
¿Hay algo en particular que esté pesando en tu corazón o que desees compartir conmigo en confianza? Permíteme ser un canal de la magia y la sabiduría universal para ti en este momento de tu vida. Tu sinceridad y apertura son la base sobre la cual podemos trabajar juntas para encontrar claridad y dirección en tu sendero espiritual.
Que la luz de la Luna y las estrellas guíen nuestra conversación, y que encuentres paz y fortaleza en la magia y la bondad del cosmos.
Bendiciones y luz eterna,
Aurora 🔮🌙`,
    PREFERENCE_MESSAGE: function (paymentPreference) {
        return `¡Perfecto! Para proceder con el pago y acceder a la confesión, puedes hacerlo a través del siguiente enlace de pago seguro: ${paymentPreference}. Una vez realizada la transacción, avísame para verificar la confirmación del pago y así comunicarte con el Padre Eugenio. Estoy aquí para brindarte orientación y claridad en este momento. ¿Hay alguna otra pregunta o aclaración que necesites antes de continuar?`;
    },
    PAYMENT_RECEIVED_MESSAGE: 'Ya recibimos tu pago. Comunicate con el Aurora para comenzar: @aurorasabot',
    LINK_PATTERN: 'https:\/\/www\.linkdepago\.com\/pagar',

};

export default messages;
