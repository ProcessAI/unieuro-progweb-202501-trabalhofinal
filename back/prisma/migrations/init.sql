CREATE SCHEMA IF NOT EXISTS laudo;

CREATE SEQUENCE IF NOT EXISTS laudo.tipolaudo_idtipolaudo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE IF NOT EXISTS laudo.tipolaudo (
    idtipolaudo integer NOT NULL DEFAULT nextval('laudo.tipolaudo_idtipolaudo_seq'),
    tipolaudonome character varying(50) NOT NULL,
    tipolaudotemplate text,
    PRIMARY KEY (idtipolaudo)
);
