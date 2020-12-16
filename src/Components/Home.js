import React from 'react'
import homepg from './homepg.jpg'


function Home(){
    return(
        <div >
        <div className="flex felx-wrap justify-center p-4">
            <img className="shadow-lg "src={homepg} alt="brooklyn 9-9"width="60%" height="20%"/>
        </div>
        <div>     
               <h1 className="flex justify-center p-3 font-bold font-mono text-xl">Brooklyn Nine-Nine</h1>

        </div>
        <div className="grid grid-cols-2 gap-4">
        <div className="p-3">
            <p className="p-5 font-mono text-m text-justify" >          Brooklyn Nine-Nine is an American police procedural comedy television series created by Dan Goor and Michael Schur. The series revolves around Jake Peralta (Andy Samberg), an immature but talented NYPD detective in Brooklyn's fictional 99th Precinct, who often comes into conflict with his new commanding officer, the serious and stern Captain Raymond Holt (Andre Braugher). 
            The rest of the cast features Stephanie Beatriz as Rosa Diaz, Terry Crews as Terry Jeffords, Melissa Fumero as Amy Santiago, Joe Lo Truglio as Charles Boyle, Chelsea Peretti as Gina Linetti, Dirk Blocker as Michael Hitchcock, and Joel McKinnon Miller as Norm Scully.
Produced as a single-camera comedy, Fox originally ordered 13 episodes for its first season, eventually expanding it to 22 episodes. Brooklyn Nine-Nine premiered on September 17, 2013. On May 10, 2018, Fox canceled the series after five seasons. </p>
        </div>  
        <div className="p-3">
            <p className="p-5 font-mono text-m text-justify "> 
             The following day, NBC picked up the series for a sixth season; it premiered on NBC on January 10, 2019. The seventh season premiered in February 2020, and the eighth is set to premiere in 2021. The series has been acclaimed by critics for its cast, especially Samberg and Braugher. It has won two Creative Arts Emmy Awards and a Golden Globe Award for Best Television Series – Musical or Comedy. Samberg has won a Golden Globe Award for Best Actor – Television Series Musical or Comedy, while Braugher has been nominated for four Primetime Emmy Awards for Outstanding Supporting Actor in a Comedy Series and has won two Critics' Choice Television Awards for Best Supporting Actor in a Comedy Series. The series has also received particular praise for its portrayal of serious issues whilst retaining a sense of humor. For its portrayal of LGBTQ+ people, the series won a GLAAD Media Award for Outstanding Comedy Series.</p>
        </div>
        </div>
        </div>
    );
}
export default Home;