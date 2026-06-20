async function bug(message, client, texts, num) {

    try {
        
            const remoteJid = message.key?.remoteJid;

            await client.sendMessage(remoteJid, {

                image: { url: `database/${num}.jpg` },

                caption: `> ${texts}`,

                contextInfo: {

                    externalAdReply: {

                        title: "Join Our WhatsApp Channel",

                        body: " Digix Crew ",

                        mediaType: 1, // Image preview

                        thumbnailUrl: `https://whatsapp.com/channel/0029VbCiqwyBVJl3Jv5T4I15`,

                        renderLargerThumbnail: false,

                        mediaUrl: `${num}.jpg`,

                        sourceUrl: `${num}.jpg`
                    }
                }
            });

    } catch (e) {
     console.log(e)

    }
}




            /*const remoteJid = message.key.remoteJid;

            await client.sendMessage(remoteJid, {

                image: { url: `${num}.jpg` },

                caption: `> ${texts}`,

                contextInfo: {

                    externalAdReply: {

                        title: "Join Our WhatsApp Channel",

                        body: " 𝐿𝑢𝑠𝑡 dєv | 𝑀𝑎𝑐ℎ𝑖𝑛𝑎𝑡𝑜𝑟 𝑑𝑒𝑣 ",

                        mediaType: 1, // Image preview

                        thumbnailUrl: `https://whatsapp.com/channel/0029VbCiqwyBVJl3Jv5T4I15`,

                        renderLargerThumbnail: false,

                        mediaUrl: `${num}.jpg`,

                        sourceUrl: `${num}.jpg`
                    }
                }
            });
        }
        */
        export default bug;
