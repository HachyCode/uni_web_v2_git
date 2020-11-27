import React from 'react';
import {
    Text,
    BulPoints,
    Links,
    SubTitle,
    MainTitle,
    PDFDWLOD,
    CoronaCard,
    Important,
    Bul
} from './CoronaElements';

const Corona = () => {
    return (
    <>
    <CoronaCard>
        <MainTitle>Updated Covid-19 guidance for students</MainTitle>
        <Text>Following the Prime Minister’s address on 22 September 2020 and the new restrictions that are to be implemented in England, we are taking some further actions to mitigate the risks of COVID-19 infections.</Text>
        <Text>These actions are important as we continue to prioritise the health and safety of our staff and students. We are also taking these actions to minimise the impact and disruption to learning and working of others following a confirmed case.</Text>
        <SubTitle>Therefore from Monday 28 September 2020:</SubTitle>
        <Important>Face coverings or visors are to be worn indoors at all times by staff and students (unless you are working on your own / independently away from others)</Important>
        <Text>All students are reminded that there is extensive information on the UCP’s website, including the ‘FAQ for students before starting in September 2020’ which you can access using the link below.</Text>
        <SubTitle>IMPORTANT – Students must notify us if</SubTitle>
        <BulPoints><Bul>■ </Bul>You have COVID symptoms</BulPoints>
        <BulPoints><Bul>■ </Bul>You have been contacted by NHS Track and Trace and told to self-isolate e.g. because a member of your household has had a positive test</BulPoints>
        <BulPoints><Bul>■ </Bul>You have had a positive test result</BulPoints>
        <SubTitle>Contact details to notify us are:</SubTitle>
        <BulPoints><Bul>■ </Bul>Tel: 01733 762237</BulPoints>
        <BulPoints><Bul>■ </Bul>Email: safeguarding.PRC@peterborough.ac.uk</BulPoints>
        <BulPoints><Bul>■ </Bul>Please ensure you state your name, course and leave a contact telephone number.</BulPoints>
        <SubTitle>IMPORTANT – All students are reminded of the following:</SubTitle>
        <BulPoints><Bul>■ </Bul>Follow social distancing protocols – 2 metre distance where possible, 1 metre within classrooms and workshops</BulPoints>
        <BulPoints><Bul>■ </Bul>Regularly wash your hands and use hand sanitizer</BulPoints>
        <BulPoints><Bul>■ </Bul>Follow directional signage around campus</BulPoints>
        <BulPoints><Bul>■ </Bul>Do not cross geographical bubbles</BulPoints>
        <Text>For students on the BA (Hons) Sport & Exercise Science, we are awaiting further guidance on whether there are further mitigations and actions we need to take following the new restrictions. Your tutors will discuss these with you should the need arise.</Text>
        <Text>Finally, see below a letter from NHS and Public Health Senior Officials. The letter reminds us all of COVID symptoms, when to get a test and the rules around self-isolation. Please see the link below to access this letter.</Text>
        <PDFDWLOD>
            <Links to='/PHELetter' activeStyle>PHE letter to parents and guardians</Links>
        </PDFDWLOD>
    </CoronaCard>
    </>
)}

export default Corona;