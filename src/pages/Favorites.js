import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
import { useContext } from "react";

const Favorites = () => {
  const favoriteCtx = useContext(FavoritesContext);

  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You Got No Favorites Yet. Start Adding Some? </p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default Favorites;
