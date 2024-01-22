ALGORITHM checkpoint
VAR
    ch:STRING;
    i,j,voyc,nbw:INTEGER;
    voy : string := aeyuioAEYUIO;
BEGIN
    write("donner une phrase");
    read(ch);
    voyc=0;
    nbw:=1;
    FOR i FROM 0 TO long(ch) STEP 1  DO
        FOR j FROM 0 TO long(voy) STEP 1  DO
            IF (ch(i)==voy(j)) THEN
                voyc:=voyc+1;
            END_IF
        END_FOR
        IF (ch(i)==" ") THEN
            nbw:=nbw+1;
        END_IF
    END_FOR
END
