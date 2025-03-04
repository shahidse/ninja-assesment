"use client";
import { useState } from "react";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";

export default function Header() {
    const [visible, setVisible] = useState(false);

    return (
        <header className="bg-white bg-opacity-90 shadow-md w-full py-4 px-6 flex justify-between items-center text-gray-500">
            <h2 className="text-xl font-bold">🍽️ Restaurant Finder</h2>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex space-x-4">
                    <li className="hover:text-blue-600 cursor-pointer">Home</li>
                    <li className="hover:text-blue-600 cursor-pointer">About</li>
                    <li className="hover:text-blue-600 cursor-pointer">Contact</li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <Button
                icon="pi pi-bars"
                className="md:hidden p-2  text-bg-gray-700 rounded-md hover:bg-gray-800 transition"
                onClick={() => setVisible(true)}
            />

            {/* Mobile Sidebar */}
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <ul className="mt-4 space-y-2 text-gray-500 bg-gray-700">
                    <li className="px-4 py-2 text-white hover:bg-gray-100 cursor-pointer">Home</li>
                    <li className="px-4 py-2 text-white hover:bg-gray-100 cursor-pointer">About</li>
                    <li className="px-4 py-2 text-white hover:bg-gray-100 cursor-pointer">Contact</li>
                </ul>
            </Sidebar>
        </header>
    );
}
