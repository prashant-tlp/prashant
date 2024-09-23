import Image from "next/image";

export default function Home() {
  return (
    <div className="app-page-container ">
      <div className="typo">    
        <pre className="text-5xl"><strong>Hello, I'm Prashant</strong></pre>
        <h3 className="text-3xl">A full stack developer </h3>
        <pre className="text-2xl pl-2">I can help you with</pre>
        <ul style={{ listStyleType: 'disc' }} className="pl-8 mb-5">
          <li>React.js development</li>
          <li>Next.js development</li>
          <li>Angular development</li>
          <li>Node.js development</li>
        </ul>
        {/* <div><button className="button-icon" >Github</button><button className="button-icon" >Linkdin</button><button></button></div> */}
        <a href='assets/resume/Prashant.pdf' className="button" download="Prashant.pdf"><button type="button"  > Downlaod Resume </button></a></div>
      <Image className='profile-img' width={200} height={200} src={`/assets/image/profile.jpg`} alt=''></Image>
    </div>
  );
}
