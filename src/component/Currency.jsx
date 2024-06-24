import React from 'react';


const Currency = ({currency,selling,buying,bank})=>{

	return (
		<div style={{paddingBottom:'20px',border:'1px solid #ffffff',marginBottom:'12px'}}>
			Currency:<span>{currency}</span><br/>
			Selling:<span>{selling}</span><br/>
			Buying:<span>{buying}</span><br/>
			Bank: <span>{bank}</span><br/>
			<img width="100" height="100" src="https://th-thumbnailer.cdn-si-edu.com/ii_ZQzqzZgBKT6z9DVNhfPhZe5g=/fit-in/1600x0/filters:focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg"/>
		</div>
	)

}

export default Currency;