import React from 'react'
import { useNavigate } from 'react-router-dom'
import routes from '../pages/routes'
import { Card } from './card'
import { Section } from './section'

const Movies = () => {
  let navigate = useNavigate()
  return (
    <>
    {/* background */}
    <div className="h-[120px] left-0 right-0 top-0 relative">
      <div className="overlay-film-cover"></div>
      <div className="h-full w-full bg-gradient-to-b from-indigo-900	 from-indigo-600"></div>
    </div>
    {/* PAGE TITLE */}
    <Section
      className="-mt-[90px] flex items-center relative z-10"
      title={'Movies'}
    ></Section>
    {/* Films */}
    <Section>
      <div className="grid lg:grid-cols-5 sm:grid-cols-4 mobile:grid-cols-3 relative z-[11]">
       
          <div>
            <Card
              onClick={() => navigate(routes.each_movie)}
              imageSrc={''}
              title={'mad max fury'}
              key={'i'}
            ></Card>
          </div>
          <div>
            <Card
              onClick={() => navigate(`/`)}
              imageSrc={''}
              title={'mad max fury'}
              key={'i'}
            ></Card>
          </div>
          <div>
            <Card
              onClick={() => navigate(`/`)}
              imageSrc={''}
              title={'mad max fury'}
              key={'i'}
            ></Card>
          </div>
          <div>
            <Card
              onClick={() => navigate(`/`)}
              imageSrc={''}
              title={'mad max fury'}
              key={'i'}
            ></Card>
          </div>
          <div>
            <Card
              onClick={() => navigate(`/`)}
              imageSrc={''}
              title={'mad max fury'}
              key={'i'}
            ></Card>
          </div>
          <div>
            <Card
              onClick={() => navigate(`/`)}
              imageSrc={''}
              title={'mad max fury'}
              key={'i'}
            ></Card>
          </div>
          <div>
            <Card
              onClick={() => navigate(`/`)}
              imageSrc={''}
              title={'mad max fury'}
              key={'i'}
            ></Card>
          </div>
          <div>
            <Card
              onClick={() => navigate(`/`)}
              imageSrc={''}
              title={'mad max fury'}
              key={'i'}
            ></Card>
          </div>
          <div>
            <Card
              onClick={() => navigate(`/`)}
              imageSrc={''}
              title={'mad max fury'}
              key={'i'}
            ></Card>
          </div>
          <div>
            <Card
              onClick={() => navigate(`/`)}
              imageSrc={''}
              title={'mad max fury'}
              key={'i'}
            ></Card>
          </div>
          <div>
            <Card
              onClick={() => navigate(`/`)}
              imageSrc={''}
              title={'mad max fury'}
              key={'i'}
            ></Card>
          </div>
          <div>
            <Card
              onClick={() => navigate(`/`)}
              imageSrc={''}
              title={'mad max fury'}
              key={'i'}
            ></Card>
          </div>
          <div>
            <Card
              onClick={() => navigate(`/`)}
              imageSrc={''}
              title={'mad max fury'}
              key={'i'}
            ></Card>
          </div>
          <div>
            <Card
              onClick={() => navigate(`/`)}
              imageSrc={''}
              title={'mad max fury'}
              key={'i'}
            ></Card>
          </div>
          <div>
            <Card
              onClick={() => navigate(`/`)}
              imageSrc={''}
              title={'mad max fury'}
              key={'i'}
            ></Card>
          </div>
          
      
      </div>
    </Section>
  </>
  )
}

export default Movies