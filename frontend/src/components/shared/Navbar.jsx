import React from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {user} = useSelector((store) => store.auth);

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>

        {/* Navigation + Auth */}
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/" className="hover:text-[#F83002] transition-colors duration-200">Home</Link></li>
            <li><Link to="/jobs" className="hover:text-[#F83002] transition-colors duration-200">Jobs</Link></li>
            <li><Link to="/browse" className="hover:text-[#F83002] transition-colors duration-200">Browse</Link></li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5a2cb0]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-80">
                <div>
                  <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>

                    <div>
                      <h4 className="font-medium">Singh MERN Stack</h4>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col my-2 text-gray-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer hover:text-[#6A38C2] transition-colors duration-200">
                      <User2 />
                      <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                    </div>

                    <div className="flex w-fit items-center gap-2 cursor-pointer hover:text-red-500 transition-colors duration-200">
                      <LogOut />
                      <Button variant="link">LogOut</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
