import './Review.css';

function Review({profile}){
    return (
        <section>
            <article class ="Review">
                <p class = "review">
                    <h1>What our customer are saying</h1>
                    <img class="profile" src={profile}></img>
                    <p>Edward Newgate</p>
                    <p>Founder Circle</p>
                    <p>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
                </p>
            </article>
        </section>
    );
}

export default Review