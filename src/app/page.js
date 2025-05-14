// import ImageBlock from '@/components/ImageBlock';
import Image from "next/image";
export default function WishPage() {
  const images = [
  { src: '/im2.jpg', caption: 'Unforgettable moment 💫' },
  { src: '/im3.jpg', caption: 'Laughs we’ll never forget 😂' },
  { src: '/im4.jpg', caption: 'Candid and cute 😄' },
  { src: '/im5.jpg', caption: 'The best day with you 🥰' },
  { src: '/im6.jpg', caption: 'Throwback vibes 📆' },
  { src: '/im7.jpg', caption: 'Chilling like pros 😎' },
  { src: '/im8.jpg', caption: 'That crazy adventure 🗺️' },
  { src: '/im9.jpg', caption: 'Your iconic smile 😁' },
  { src: '/im10.jpg', caption: 'Pure happiness 💕' },
  { src: '/im11.jpg', caption: 'Friendship goals 🔥' },
  { src: '/im12.jpg', caption: 'The moment that mattered 🕰️' },
  { src: '/im13.jpg', caption: 'A memory sealed forever 🔐' },
  { src: '/im14.jpg', caption: 'You being YOU 💫' },
  { src: '/im15.jpg', caption: 'Forever in my heart ❤️' },
  { src: '/im16.jpg', caption: 'The way we vibe 💃🕺' },
  { src: '/im17.jpg', caption: 'Crazy times, good times 🤪' },
  { src: '/im18.jpg', caption: 'To many more memories 🎉' },
];


  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 py-8">
      <div className=" relative  h-[700px] w-full  shadow-lg bg-center bg-cover bg-[url('/im1.jpg')]">
        <h1 className="text-2xl font-bold text-center text-pink-800 mb-6 px-1">
        Happy Birthday pilagosss 🎂
        </h1>
        <p className="text-[17px] font-bold px-1 leading-[1.5] absolute bottom-3 bg-black/45">
          Happy Birthday pilaga , <br />
          happy bday ra ♾ <br />
          aa roju hurt aina , antha easy ga normal kaatle, but i remine every single day ra 💗
          happy bday ra , sorry.. but ...
          okay good night ra ,,143 ra 💗....
        </p>
      </div>

      <section className="space-y-8">
        {images.map((img, index) =><div key={index}><Image src={img.src} width={360} height={700} alt={"happy bday ra"} /></div>)}
      </section>
      <p className="px-2 bg-inherit text-2xl font-semibold">konni photos atla add chesina,,, gurthu cheskuntav aniii ... happpy bday ra ❤💥
</p>
    </main>
  );
}
