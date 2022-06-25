function SectionHeader({ text }) {
    return (
        <h2 className="lg:text-6xl text-3xl font-bold text-gray-900 text-center mt-8 lg:mb-16 mb-8 font-serif underline underline-offset-2 uppercase">
            {text}
        </h2>
    );
}

export default SectionHeader;
