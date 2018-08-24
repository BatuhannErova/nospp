const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT KULLANIMA HAZIR ${client.user.tag}!`);
});

client.on('message', msg => {
  console.log(`Yeni Mesaj Alındı!  Mesajı : ${msg.content} Yazan: ${msg.author.tag}`);
  

if (msg.content === prefix + 'sunucubilgi') {
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(msg.author.avatarURL)
      .addField("Sunucu Sahibi", msg.guild.owner)
      .addField("Toplam Üye Sayısı", msg.guild.members.size)
      .addField("Oluşturulma Tarihi", msg.guild.createdAt)
      msg.channel.send(embed)
}




  if (msg.content === 'Sa') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'S.a') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'SA') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'sA') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'Selamün Aleyküm') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'Selamın Aleyküm') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'SelamünAleyküm') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'Selamun Aleyküm') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'SelamunAleyküm') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'Selam') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'selam') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'Nasılsınız') {
    msg.reply('İyiyiz Sen Nasılsın');
  }
  if (msg.content === 'Eyw Bot Kardeş') {
    msg.reply('Eyw Canım <3');
  }
  if (msg.content === 'Oyun Oynamak İsteyen Varmı?') {
    msg.reply('Ben İsterdim Ama Sadece Bir Botum');
  }
  if (msg.content === 'sea') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'Sea') {
    msg.reply('Aleyküm Selam Hoşgeldin Kardeşim');
  }
  if (msg.content === 'Bot Naber') {
    msg.reply('İyidir Çalışıyoruz Sen');
  }
  if (msg.content === 'Bende İyi') {
    msg.reply('Allah İyilik Versin Kardeşim <3');
  }
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Ping Değeriniz! **' + client.ping + '** ms');
  }
  if (msg.content.toLowerCase() === prefix + 'mert') {
    msg.reply('Yakışıklı Karizmatik Tam Bir Kız Avcısı :)');
  }
  if (msg.content.toLowerCase() === prefix + 'batuhan') {
    msg.reply('Sanırsam Biraz Manyak Biraz Deli Ama Dürüst Adamdır');
  }
  if (msg.content.toLowerCase() === prefix + 'irem') {
    msg.reply('Biraz Deli Sanki Uzak Durmakta Fayda Var :)');
  }
  if (msg.content.toLowerCase() === prefix + 'berra') {
    msg.reply('Ah Bide Online Olsa :)');
  }
  if (msg.content.toLowerCase() === prefix + 'duygu') {
    msg.reply('Ah Bide Online Olsa :)');
  }
  if (msg.content.toLowerCase() === prefix + 'narsila') {
    msg.reply('Oda Kim Ama İsmi Biraz Garip Sanki');
  }
  if (msg.content.toLowerCase() === prefix + 'nehir') {
    msg.reply('Hangi Nehir Anladınmı Espriyi :)');
  }
  if (msg.content.toLowerCase() === prefix + 'yagmur') {
    msg.reply('OOO Yağmuru Kessss :)');
  }
  if (msg.content.toLowerCase() === prefix + 'zeynep') {
    msg.reply('Küçükken Koyunum Vardı Zeynep Adında');
  }
  if (msg.content.toLowerCase() === prefix + 'zübeyde') {
    msg.reply('Artık Sekunun Saçlarını Bırak :)');
  }
  if (msg.content.toLowerCase() === prefix + 'şura') {
    msg.reply('Hollandalı Kıza Bak Sen Ablanı Merte Ver Kız');
  }
  if (msg.content.toLowerCase() === prefix + 'alihan') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'tefo') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'abdulkadir') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'ahmet') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'anouar') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'anıl') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'arda') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'atilla') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'baha') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'bartu') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'barış') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'batu') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'berk') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'berkay') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'berke') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'caner') {
    msg.reply('Ase ase ase bıktım senden ya');
  }
  if (msg.content.toLowerCase() === prefix + 'cem') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'demir') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'doğukan') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'efe') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'emre') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'enes') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'erdinç') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'erva') {
    msg.reply('Tatlı Bir İsim Ama Online Olsa Daha Tatlı Sanki :)');
  }
  if (msg.content.toLowerCase() === prefix + 'fatih') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'fuat') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'furkan') {
    msg.reply('İşe Yaramaz Bence Sence ??');
  }
  if (msg.content.toLowerCase() === prefix + 'gökhan') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'habil') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'halim') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'hasan') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'kerem') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'murat') {
    msg.reply('Koyimda Turat Şaka Şaka Alınma Hemen I Love You Murat :)');
  }
  if (msg.content.toLowerCase() === prefix + 'nail') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'oğuzhan') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'onur') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'orhan') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'osman') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'samican') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'sedat') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'sergen') {
    msg.reply('Ah Bide Online Olsa');
  }
  if (msg.content.toLowerCase() === prefix + 'mustafa') {
    msg.reply('Çok Boş Yapıosun Yapma Aslanım :)');
  }
  if (msg.content.toLowerCase() === prefix + 'aslı') {
    msg.reply('Garadeniz Uşağudur Gendisi Biraz Uzak Dur Assanım :)');
  }
  if (msg.content.toLowerCase() === prefix + 'starkinq') {
    msg.reply('Saygı Değer Satır Bey Aramızda Bulunmanız Bizim İçin Büyük Bir Şereftir');
  }
  if (msg.content.toLowerCase() === prefix + 'eren') {
    msg.reply('Gözlüklü Kız Avcısı Seniiiii :)');
  }
  if (msg.content.toLowerCase() === prefix + 'kerem') {
    msg.reply('Çorapçı Kızlar Buna Dikkat');
  }
  if (msg.content.toLowerCase() === prefix + 'ömür') {
    msg.reply('Yeni Çocuuuk Online Olursa Kapar Yetkiyi');
  }
  if (msg.content.toLowerCase() === prefix + 'bilgi') {
    msg.reply('.ping Yazarak Pingi Öğrenebilirsiniz Yada .(isminizi) Yazarak Sizin Hakkınızda Ne Düşündüğümüzü Öğrenebilirsiniz.');
  }
  if (msg.content.toLowerCase() === prefix + 'emirhan') {
    msg.reply('Ben Bir İneğim Sadece Gragas Oynarım Aptalım :)');
  }
  if (msg.content.toLowerCase() === prefix + 'banaduygularınıanlat') {
    msg.reply('Kendimi Mal Gibi Hissediyorum Sanırsam Mustafaya Benzemeye Başladım');
  }
  if (msg.content.toLowerCase() === prefix + 'miran') {
    msg.reply('Sanal İsmin Çekiciymiş Büyüyünce Çok Can Yakarsın');
  }
  if (msg.content.toLowerCase() === prefix + 'naz') {
    msg.reply('Hele Tipe Bak Yolda Bulsam Almam :)');
  }
  if (msg.content.toLowerCase() === prefix + 'boşyapma') {
    msg.reply('Sen Boş Yapma Aslanım');
  }
  if (msg.content.toLowerCase() === prefix + 'busenur') {
    msg.reply('Büyüyünce Patron Olcak Ah Kızım :)');
  }
  if (msg.content.toLowerCase() === prefix + 'iq') {
    msg.reply('Senden Yüksek Merak Etme');
  }
  if (msg.content.toLowerCase() === prefix + 'ses') {
    msg.reply('Ne Sesi Nerde Ses Seste Kim :D');
  }
  if (msg.content.toLowerCase() === prefix + 'can') {
    msg.reply('Allah Affetsin Kardeşim :)');
  }
  if (msg.content.toLowerCase() === prefix + 'şuranınablası') {
    msg.reply('Mertindir Kimse Yazmasın');
  }
  if (msg.content.toLowerCase() === prefix + 'yas') {
    msg.reply('11 buçuk');
  }
  if (msg.content.toLowerCase() === prefix + 'nezamanevlencen') {
    msg.reply('Büyüyünce :( :( ');
  }
  if (msg.content.toLowerCase() === prefix + 'mertkaccm') {
    msg.reply('Lan Gücücükya Lan Allah Cezanı Versin :)');
  }
  

});

client.login(process.env.BOT_TOKEN);
