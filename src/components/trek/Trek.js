import React from "react";
import { Link } from "react-router-dom";
import style from "../../style/trekStyle";

class Trek extends React.Component {

    
    render() {

        return (
            <>
        <div style={style.root}>
            <div style={{textAlign: "center", justifyContent: "center"}}>
                
                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.treasuresntoys.com%2Fstar_trek_spinning_logo.gif&f=1&nofb=1"/>
                <h1 style={{color: "yellow", float: "center", display: "inline"}}>Welcome to Liam's Star Trek Fan Page</h1>
                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.treasuresntoys.com%2Fstar_trek_spinning_logo.gif&f=1&nofb=1"/>
            </div>

            <h2 style={{color: "yellow", textAlign: "center"}}>Thanks for beaming down!</h2>

            <br/><br/><br/><br/>

            <p style={style.content}>
                On this pageyou will find my thoughts and opinions on all things Star Trek. As a fan since adolescense, I have seen every episode and film in the Star Trek franchise (with the exception
                of <i>The Animated Series</i>). Thank you for joining my away team as we discover strange, new worlds, seek out new life and new civilizations, and boldly go where no one has gone before!
            </p>
            
            <br/><br/><br/>

            <center>
                <table>
                    <tr>
                        <td><img src="https://bestanimations.com/media/star-trek/306812511star-trek-spaceship-animated4.gif"/></td>
                        <td><img src="https://bestanimations.com/media/star-trek/1581299810star-trek-spaceship-animated5.gif"/></td>
                        <td><img src="https://bestanimations.com/media/star-trek/312314985star-trek-spaceship-animated2.gif"/></td>
                        <td><img src="https://bestanimations.com/media/star-trek/1396857703star-trek-spaceship-animated9.gif"/></td>
                        <td><img src="https://bestanimations.com/media/star-trek/602903347star-trek-spaceship-animated8.gif"/></td>			
                    </tr>
                </table>
            </center>
            
            <br/><br/><br/>

            <h2 style={{textAlign: "center"}}>Site Map</h2>
            <table style={{marginLeft: "auto", marginRight: "auto"}}>
                <tr>
                    <td>
                        <ul>
                            <li><Link style={style.a} to="/trek">Home</Link> (You're here.)</li>
                            <li><Link style={style.a} to="/trek/shows">Shows</Link></li>
                            <li><a style={style.a} href="films.html">Films</a></li>
                            <li><a style={style.a} href="games.html">Video Games</a></li>
                            <li><a style={style.a} href="funny.html">Funny Stuff</a></li>
                        </ul>
                    </td>
                </tr>
            </table>

            <p style={style.disclaimer}>
                All media belongs to its respective owners. I do not claim to own any Star Trek images, audio, etc. CBS/Paramount, please don't sue me. I'm a poor college student. 
            </p>
        </div>
        </>
        );
    }
}

export default Trek;