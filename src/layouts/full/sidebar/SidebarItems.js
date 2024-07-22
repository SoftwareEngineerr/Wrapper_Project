import React, { Suspense, useEffect, useState } from 'react';
import Menuitems from './MenuItems';
import { useLocation } from 'react-router';
import { Box, List } from '@mui/material';
import NavItem from './NavItem';
import NavGroup from './NavGroup/NavGroup';
import Loader from '../../../components/loader/loader';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoader } from '../../../redux/actions/loader';

const SidebarItems = () => {
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const dispatch = useDispatch();
  const [items , setItems ] = useState(Menuitems());


  const makeseconds = Math.random();
  const Stringconvertion = makeseconds.toString();
  const zeroToOne = Stringconvertion.replace('0','1')

  function myfunc(){
    setTimeout(()=>{
      dispatch(ShowLoader('0'))
    },1500)
    dispatch(ShowLoader(zeroToOne))
  }
  useEffect(()=>{
    myfunc()
  })

  return (
    <Box sx={{ px: 3 }}>
      
           <Loader /> 

      <List sx={{ pt: 0 }} className="sidebarNav">
        {items.map((item , ind) => {
          // {/********SubHeader**********/}
          if(item.item){
          if (item.subheader) {
            return <NavGroup item={item} key={ind} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else {
            if(item.href != undefined){
              return (
                  <NavItem item={item} onClick={myfunc} key={ind} pathDirect={pathDirect} />
              );
            }
          }
        }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
