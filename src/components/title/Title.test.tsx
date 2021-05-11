import { render, screen } from "@testing-library/react";
import { Title } from "./Title";
describe('Title Component', () => {
    test('renders title logo', () => {
        render(<Title></Title>)
        const imgElement = screen.getByAltText('logo');
        expect(imgElement).toBeInTheDocument();
    });

    test('renders title ', () => {
        render(<Title></Title>)
        const titleElement = screen.getByText('Olympic Winter Games - Sochi 2014');
        expect(titleElement).toBeInTheDocument();
    });
})
