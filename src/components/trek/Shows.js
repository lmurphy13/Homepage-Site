import React from "react";
import { Link } from "react-router-dom";
import style from "../../style/trekStyle";

class Shows extends React.Component {
    render() {
        return (
            <>
                <div style={style.root}>
                    <h1 style={style.header}>
                        Liam's Star Trek Fan Page
                    </h1>
                    <h2 style={style.header}>
                        Discussion on the Star Trek TV Series
                    </h2>

                    <br/>
                    
                    <p style={style.content}>
                        “Compassion: that’s the one thing no machine ever had. Maybe it’s the one thing that keeps men ahead of them.”
                    </p>
                    <p style={style.content}>
			            - Dr. McCoy, <i>Star Trek: The Original Series</i>, <i>The Ultimate Computer</i> 
		            </p>

                    <br/><br/><br/><br/><br/>

                    <table style={{marginLeft: "auto", marginRight: "auto"}}>
                        <tr>
                            <td>
                                <p>Star Trek series currently on air:</p>
                                <ul>
                                    <li><i>Star Trek: Discovery</i></li>
                                    <li><i>Star Trek: Picard</i></li>
                                    <li><i>Star Trek: Lower Decks</i></li>
                                    <li><i>Star Trek: Short Treks</i></li>
                                </ul>
                            </td>

                            <td>
                                <p>Star Trek series from the past</p>
                                <ul>
                                    <li><i>Star Trek: The Original Series</i></li>
                                    <li><i>Star Trek: The Next Generation</i></li>
                                    <li><i>Star Trek: Deep Space Nine</i></li>
                                    <li><i>Star Trek: Voyager</i></li>
                                    <li><i>Star Trek: Enterprise</i></li>
                                </ul>
                            </td>
                        </tr>
                    </table>

                    <br/><br/><br/>

                    <h3 style={style.header}>
                        <i>Star Trek: The Original Series</i>
                    </h3>

                    <p style={style.pg}>
                        To start this discussion, we first must acknowledge <i>Star Trek: The Original Series</i> (TOS from now on). TOS is the show that changed everything. Born from the mind of Gene Roddenberry (1921-1991),
                        the Star Trek universe sought to explore various topics in society at the time including race, religion, war, poverty, and many many many other things. When TOS first aired on September 8, 
                        1966, the world was a far cry from the 23rd century of the Star Trek universe. Airing during a time of civil unrest, social, and cultural change, Star Trek offered a beacon of hope for the future of humanity. People could look to the future with idea that humanity could grow beyond its current limitations. People could imagine a future without poverty, disease, war, hunger, and want. To us, this future seems like a paradise. 
                    </p>

                    <img style={style.picture} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.timesunion.com%2Fmovies%2Ffiles%2F2013%2F05%2Fstar-trek-tos.jpg&f=1&nofb=1" alt="Star Trek: The Original Series main cast"/>

                    <p style={style.pg}>
                        The Star Trek franchise in general appeals to an audience that values a show with a moral and message. Even though TOS did not have a contiguous story from episode to episode, nowadays called syndication, many episodes addressed a social issue from the era. In the fifteenth episode of the third season, titled <i>Let That Be Your Last Battlefield</i> the issue of racism was discussed in a not-so-thinly-veiled plot. Two aliens, bitterly in conflict with each other, put the Enterprise in jeapordy. Each alien appears black on 50% of his body and white on the other 50%. Each alien has a mirror coloration to the other. One is black on the left side and white on the right side and the other is opposite. In the end, these aliens are told that they are exactly the same; that their differences are trivial. What does it matter who is black or white on which side? 	
                    </p>

                    <img style={style.picture} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fmidnitereviews.com%2Fwp-content%2Fuploads%2F2016%2F08%2FStar-Trek-Let-That-Be-Your-Last-Battlefield-2.jpg%3Fssl%3D1&f=1&nofb=1" alt="The alien beings from Let That Be Your Last Battlefield"/>

                    <p style={style.pg}>
                        This lesson was meant to represent the civil rights movement of the 1960s, where African Americans faced intense racial discrimination in the United States. <i>Let That Be Your Last Battlefield</i> raised a good argument: even though you look slightly different, you're practically the same. Even though humans come in different shapes, colors, and sizes, we're all basically the same; we're all human beings. <i>Let That Be Your Last Battlefield</i> was not the only example of Star Trek making a statement on racism. During season three, episode ten: <i>Plato's Stepchildren</i>, Captain Kirk (William Shatner) and Lt. Uhura (Nichelle Nichols) shared one of the first interracial kisses on television.
                    </p>

                    <img style={style.picture} src="https://screenrant.com/wp-content/uploads/Kirk-Uhura-Kiss.jpg"/>

                    <h3 style={style.header}><i>Star Trek: The Next Generation</i></h3>

                    <p style={style.pg}>
                        Nearly twenty years after the conclusion of TOS, <i>Star Trek: The Next Generation</i> aired its first episode on September 28, 1987.
                    </p>

                    <img style={style.picture} src="https://overmental.com/wp-content/uploads/2015/11/Star-Trek-TNG-crew.jpg"/>

                    <h3 style={style.header}><i>Star Trek: Deep Space Nine</i></h3>

                    <img style={style.picture} src="https://www.popmythology.com/wp-content/uploads/2015/03/Star-Trek-Deep-Space-Nine-crew.jpg"/>

                    <h3 style={style.header}><i>Star Trek: Voyager</i></h3>

                    <img style={style.picture} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdownundergeek.files.wordpress.com%2F2016%2F07%2Fmaxresdefault.jpg%3Fw%3D1200&f=1&nofb=1"/>

                    <h3 style={style.header}><i>Star Trek: Enterprise</i></h3>

                    <img style={style.picture} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.treknews.net%2Fwp-content%2Fuploads%2F2016%2F09%2Fstar-trek-50-enterprise-crew.jpg&f=1&nofb=1"/>

                    <h3 style={style.header}><i>Star Trek: Discovery</i></h3>

                    <h3 style={style.header}><i>Star Trek: Picard</i></h3>

                    <h3 style={style.header}><i>Star Trek: Short Treks</i></h3>

                    <h3 style={style.header}><i>Star Trek: Lower Decks</i></h3>

                    <br/><br/><br/>

                </div>

                <footer style={{textAlign: "center", position: "relative", width: "100%", bottom: "15px", left: "0"}}>
                    <hr style={{width: "80%"}} color="yellow"/>
                    Go <Link style={{color: "yellow"}} to="/trek">back</Link>
                    <br/>
                    &copy; 2022 Liam M. Murphy
                </footer>
            </>
        )
    }
}

export default Shows;