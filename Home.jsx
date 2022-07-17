

const Home = ({loggedIn, user}) => {

     return (
        <>
        {loggedIn? (
            <h1>Welcome, {user.username}</h1>
        ): (
            <h1>nooo</h1>
        )}
        </>
     )
}

export default Home;