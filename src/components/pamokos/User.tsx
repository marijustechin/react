interface UserProps {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}

export const User = ({ user }: { user: UserProps }) => {
  return (
    <div className="max-w-4xl mx-auto bg-sky-200">
      <div className="flex flex-col items-center">
        <img className="rounded-full pt-2" src={user.avatar} alt="avatar" />
        <h1 className="text-4xl my-3">{user.username}</h1>
        <p className="text-xl">@{user.tag}</p>
        <p className="text-xl mb-5">{user.location}</p>
      </div>
      <div className="flex justify-between bg-pink-400">
        <div className="w-1/3 flex flex-col items-center border-r border-black">
          <h2 className=" text-slate-100 text-2xl my-2">Followers</h2>
          <p className="font-semibold mb-3">{user.stats.followers}</p>
        </div>
        <div className="w-1/3 flex flex-col items-center border-r border-black">
          <h2 className=" text-slate-100 text-2xl my-2">Views</h2>
          <p className="font-semibold mb-3">{user.stats.views}</p>
        </div>
        <div className="w-1/3 flex flex-col items-center">
          <h2 className=" text-slate-100 text-2xl my-2">Likes</h2>
          <p className="font-semibold mb-3">{user.stats.likes}</p>
        </div>
      </div>
    </div>
  );
};
