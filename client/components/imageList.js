 //Creating ImageList

//importing react library
import React from 'react';
import ImageDetail from './imageDetail';


/*const IMAGES=[
{title:'kavi',link:'https://dummyimage.com/600x400'},
{title:'reddy',link:'https://dummyimage.com/600x400'},
{title:'kav',link:'https://dummyimage.com/600x400'}
];*/

//Create the component

const ImageList = (props)=>{

	const filteredAlbum=props.images.filter (image=> !image.is_album);

	const RenderImages=filteredAlbum.map(image => {
		return <ImageDetail key={image.title} image={image}  />
	})
	return(
		<ul className='media-list list-group'>
      {RenderImages}
		</ul>
		);
};


//export the component
export default ImageList;