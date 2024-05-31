import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-yellow-300 p-6 text-center">
            <div className="space-y-4">
                <div className="space-y-2">
                    <p>Email: quicksolver02@gmail.com</p>
                    <p>Phone: +39 334 962 8407</p>
                    <p>Location: Cuneo, Italy</p>
                    <p>P.IVA: IT04081230049</p>
                </div>
                <div>
                    <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;