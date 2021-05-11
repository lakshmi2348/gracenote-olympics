import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
describe('Header Component', () => {
    test('renders header logo', () => {
        render(<Header></Header>)
        const imgElement = screen.getByAltText('logo');
        expect(imgElement).toBeInTheDocument();
    });

    test('renders header title', () => {
        render(<Header></Header>)
        const titleElement = screen.getByText('Olympics 2014 Summary');
        expect(titleElement).toBeInTheDocument();
    });
})
