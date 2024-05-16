CREATE TABLE example (
    id SERIAL PRIMARY KEY,
    text_field TEXT,
    integer_field INTEGER
);

INSERT INTO example (text_field, integer_field) VALUES
    ('somethign', 852),
    ('something 2', -831),
    ('something 3', 23);