


import './homeContentLeft.css'

export const HomeConetentLeft = () => {
  return (
    <>
      <div className='content'>
          <div className="content-welcome">
            <div className='welcome'>
              <h2 className='title-welcome'>Bienvenida, Daniel</h2>
              <p className='text-welcome'>¡Esperamos que tengas <span> <br/>un bendecido día!</span></p>
            </div>
            {/* <span className='img-welcome'></span> */}
            <img src="https://i.imgur.com/nfQ90IZ.png" alt="" className='img-welcome' />
          </div>
          <div className="continue-course">
              <h2>¡Continúa tu curso!</h2>
              <div className="course-video"></div>
          </div>
          <div className="means">
              <h2>¡Continúa tu curso!</h2>
              <div className="means-video">
                {/* <p className='container-means'>HISTORIA DEL <br/>ANTISEMITISMO</p> */}
              </div>
          </div>
      </div>
    </>
  )
}
