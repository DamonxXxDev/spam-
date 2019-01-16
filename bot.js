;
const client = new Discord.Client();

console.log("Welcome Again !");
client.on('message', message => {
    if (message.content === '.') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 90000; x++) {
            message.channel.send(`سباام يولد يلعن اومم الفله ${x}`)
              .then(m => {
                count++;
              })
              
            }
          }
    });
client.login("NTM0MzE4MTczMDQyOTAxMDEy.Dx4QjQ.DPs8r0NopYsxYpYIL0ff4OA4WiQ");
