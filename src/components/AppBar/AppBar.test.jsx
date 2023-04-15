import { describe, test, expect } from 'vitest';
import { render, screen } from '../../utils/test-utils';
import AppBar from './AppBar';

describe('AppBar test', () => {
  test('Should render', () => {
    render(<AppBar />);

    expect(screen.getByText(/Cboard Phrase/i)).toBeDefined();
  });
});
