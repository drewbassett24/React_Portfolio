// import React from "react";
import me from "./me.jpg";

const Bio = () => {
    return (
        <>
            <div class="row border rounded ">
                <div className="col-3 m-4 p-3">
                    <img src={me} alt="Drew" />
                </div>

                <div className="col-8 m-4 p-3">
                    <p>Hi. Thanks for taking the time to look at my page.</p>
                    <p>I'm fifty years old and both relocating to Northern Ireland and retraining. I was a teacher for
                    twenty years, teaching TEFL in Thailand and Columbia, ESOL (English for Speakers of
                    Other Languages) in a Further Education College, and finally Literature and Language in Secondary School.
                    Most of those switches have seen me outside my comfort zone and
                    I like that. It stops you getting stuck in a rut.
                    In FE College, I had excellent training in target-setting, challenging yourself, problem-solving and basically
                    embracing the 'Discomfort Zone' despite all your instincts to do otherwise.
                    In Secondary School I learned a lot about young people and myself and Shakespeare.
                    I love teaching, but for personal reasons, it is time to do something new. I also have a cat, called PB.
                    Family members disagree over what it stands for, but for me, it means Personal Business.
                    Those who have time for Adventures will get the reference.</p>
                    <p>I also like walking, talking, reading, writing, drawing, watching (good) movies, Science Fiction  (The Expanse,
                    Altered Carbon, The Quantum Thief), Roleplaying Games and good food. I like real ale and single malt
                whiskey. And people. I like people.</p>
                </div>
            </div>
        </>
    );
}

export default Bio;