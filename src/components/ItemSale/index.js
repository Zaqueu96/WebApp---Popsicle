import React,{ useState, useCallback, useEffect } from "react";

import {MdAddCircleOutline,MdRemoveCircleOutline} from 'react-icons/md'
import {toast} from 'react-toastify';
import {Favorite as FavoriteIcon,Share as ShareIcon, TrendingUpRounded} from '@material-ui/icons';
import{
ImageCmp,
ButtonCustom
} from "./styles";
import { 
    Typography,
     Card, 
     Grid, 
     CardMedia,
      CardHeader,
       CardContent,
        Avatar, 
        CardActions,
    IconButton,
    Icon, 
    } from "@material-ui/core";
import { Fragment } from "react";

export default function ItemSale({item}){
    const k = Math.round(Math.random()*190)
    const statusItemValues = {
        isAdd:{
          icon:MdAddCircleOutline,
          title:'Adicionar ao carrinho',
          color:'primary'
        },
        isRemove:{
          icon:MdRemoveCircleOutline,
          title:'Remover do carrinho',
          color:'secondary'
        }
      }
      const [isFavorite,setIsFavorite] = useState(false);
      const [statusItem,setStatusItem] = useState(statusItemValues.isAdd)
      const openInstagram = () => {
        window.open(`https://www.instagram.com/picole.da.rauquira/?utm_medium=copy_link`)
      }
    
      const setStatusItemFN = useCallback(()=>{
        
        setStatusItem((old)=>{
          const msg = old.title != statusItemValues.isAdd.title ? 
          'Item removido do carrinho.':'Item adicionado ao carrinho.'
          toast.info(()=>{
              return <Fragment style={{display:'flex',flexDirection:'row'}}>
                  <b>{msg}</b> 
              </Fragment>
          })
          
          return old.title != statusItemValues.isAdd.title ? statusItemValues.isAdd:statusItemValues.isRemove
        });
        console.log("Set F")
      },[])
    
    
      
      const setFavoriteStatus = useCallback(()=>{
        setIsFavorite((old)=>{
          const msg = old? 'Removido dos favoritos.':'Adicionado aos favoritos.'
          toast.success(msg)
        return !old;
        });
        console.log("Set F")
      },[])


    return (
        <Card style={{ display: 'flex', flexDirection: "column", height: '100%' }} >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" style={{ backgroundColor: '#F4464B', color: 'white' }}>
              RP
            </Avatar>
          }
          title="Rauquiria Sorvetes e Picoles"
          subheader="@picole.da.rauquira"
          onClickCapture={(evt) => {
            if (String(evt?.target?.firstChild?.data).includes("@"))
              openInstagram();
          }}
        />
        <ImageCmp src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlw63Pkpok372UvSf6GvKPF491TzZLUUYs2A&usqp=CAU' />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h4">
            Picolé {k + 1}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Moreninnhas e picoless</Typography>
        </CardContent>
        <CardActions draggable>
          <IconButton aria-label="adicionar aos favoritos"
          onClick={()=>setFavoriteStatus()}>
            <FavoriteIcon color={isFavorite?'secondary':'inherit'} />
          </IconButton>
          {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
          <ButtonCustom 
          onClick={()=>setStatusItemFN(TrendingUpRounded)}
          endIcon={<statusItem.icon/>}
          variant="outlined" 
          color={statusItem.color}
           title={statusItem.title}
            >
            R$ 12.00
            </ButtonCustom>
        </CardActions >
      </Card>
    )
}