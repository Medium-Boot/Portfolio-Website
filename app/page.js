import Image from 'next/image'

export default function Home() {
  return (
    <>

      <header>
        <nav>
          <div className="left">Aditya's Portfolio</div>
          <div className="right">
            <ul>
              <li><a href="/">About</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Projects</a></li>
              <li><a href="/">Contact Me</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="firstSection">
          <div className="leftSection">
            <div>Hi, my name is <span className="purple">Aditya</span></div>
            <div>and I am a passionate</div>
            <div>Web Developer</div>
            <span id="element"></span>
            <div className="buttons">
              <button className="btn">Download Resume</button>
              <button className="btn">Visit Github</button>
            </div>
          </div>
          <div className="rightSection">
            <img src="profile.png" alt="profile photo" />
          </div>

        </section>
        <hr />
        <section className="secondSection">
          <span className="text-gray">What I have done so far...</span>
          <h1>Work Experience</h1>

          <div className="box">
            <div className="vertical">
              <img className="image-top" src="developer.png" alt="" />
              <div className="vertical-title">
                HTML Developer - Pinterest  (2010-2012)
              </div>
              <div className="vertical-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, provident. Neque recusandae nisi
                magnam voluptate incidunt suscipit, quod sed quo saepe delectus non.
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src="facebook.png" alt="" />
              <div className="vertical-title">
                Node.js Developer - Facebook (2012-2014)
              </div>
              <div className="vertical-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, provident. Neque recusandae nisi
                magnam voluptate incidunt suscipit, quod sed quo saepe delectus non.
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src="instagram.png" alt="" />
              <div className="vertical-title">
                HTML Developer - Instagram (2014-2015)
              </div>
              <div className="vertical-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, provident. Neque recusandae nisi
                magnam voluptate incidunt suscipit, quod sed quo saepe delectus non.
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src="twitter.png" alt="" />
              <div className="vertical-title">
                HTML Developer - Twitter(2015-2016)
              </div>
              <div className="vertical-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, provident. Neque recusandae nisi
                magnam voluptate incidunt suscipit, quod sed quo saepe delectus non.
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src="facebook.png" alt="" />
              <div className="vertical-title">
                HTML Developer - Facebook (2016-2017)
              </div>
              <div className="vertical-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, provident. Neque recusandae nisi
                magnam voluptate incidunt suscipit, quod sed quo saepe delectus non.
              </div>
            </div>
            <div className="vertical">
              <img className="image-top" src="youtube.png" alt="" />
              <div className="vertical-title">
                Sotware Developer - Youtube (2017-2023)
              </div>
              <div className="vertical-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, provident. Neque recusandae nisi
                magnam voluptate incidunt suscipit, quod sed quo saepe delectus non.
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer">
          <div className="footer-first">
            <h3>Aditya's Developer Portfolio</h3>
          </div>
          <div className="footer-second">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="footer-third"></div>
          <div className="footer-fourth"></div>
        </div>
        <div className="footer-rights">
          Copyright&#169; www.adityasportfolio.com | All rights reserved
        </div>
      </footer>
    </>
  )
}
