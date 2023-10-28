import React from 'react';
import { Whatshot, Movie, Tv, Search} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import '../Styles/footer.css';
const Footer = () => {
  const data = [
    {
      icon: <Whatshot />,
      name: "Trending",
      link: "/",
    },
    {
      icon: <Movie />,
      name: "Movies",
      link: "/movies",
    },
    {
      icon: <Tv />,
      name: "TV Series",
      link: "/tv_series",
    },
    {
      icon: <Search />,
      name: "Search",
      link: "/search",
    },
  ];
  return (
    <>
      <div className="Controls">
        <div className='buttons'>
          {data.map((Val) => {
            return (
              <>
                <NavLink to={`${Val.link}`}>
                  <Button variant='text' color='warning' size='small'
                    style={{ display: "inline-block", 
                      marginTop: "5px",
                      marginRight: "5px" }}>
                    {Val.icon}
                    <br />
                    <span>{Val.name}</span>
                  </Button>
                </NavLink>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Footer
