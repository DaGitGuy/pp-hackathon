import './UserPage.scss';
import Article from '../../components/Article/Article';

const UserPage = () => {
  return (
    <>
        <section className='user-page'>
            <h1>Here are your articles:</h1> 
            {/* {.map(()) => {
                return (
                    <Article 
                        key={}
                        id={}

                    />
                )
            }} */}
        </section>
    </>
  );
};

export default UserPage;