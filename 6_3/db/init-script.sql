
CREATE TABLE sample_table (
    id SERIAL PRIMARY KEY,
    text_field TEXT,
    integer_field INTEGER
);

INSERT INTO sample_table (text_field, integer_field) VALUES
    ('Example Text 1', 42),
    ('Example Text 2', 123),
    ('Another Example', 789);