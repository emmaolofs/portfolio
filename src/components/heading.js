import profile from '../assets/profile.png'

function Heading() {
    return(
        <div id="headingMain">
            <div id="headingInformation">
                <h1>Emma Olofsson</h1>
                <h2>Front-end developer</h2>
                <h3>Contact information</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>Phone: </th>
                            <td><i>+46 733 281 276</i></td>
                        </tr>
                        <tr>
                            <th>E-mail: </th>
                            <td><i>olofsson.ej@gmail.com</i></td>
                        </tr>
                    </tbody>               
                </table>   
            </div>   
            <img src={profile} alt="profile_image" />                 
        </div>
    )
}

export default Heading;