import React from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';

const List = (props) => {
    return (
        <div style={{height:"400px",width:"1262px",backgroundColor:"#ffb3b3"}}>

<Grid container id="grid-container" style={{gridGap:"50px",padding:"50px",fontSize:"20px"}}>
    {props.descri.map((descri,title, index)=>(
        <Grid style={{backgroundColor:"white",width:"200px",padding:"10px"}} item xl={3} key={index}>
            Title {title}<br />
            {descri.message}{" "} 
            
        </Grid>
    ))}
    </Grid>

        </div>
    )
}

const mapStateToProps = (state) =>({
    descri: state.descri.data,
    title: state.title.data
});
export default connect(mapStateToProps)(List);

