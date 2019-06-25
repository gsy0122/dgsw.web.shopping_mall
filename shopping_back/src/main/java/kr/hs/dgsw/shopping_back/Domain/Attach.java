package kr.hs.dgsw.shopping_back.Domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Builder;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class Attach {
    private Long id;
    private String filename;
    private String filepath;

    @Builder
    public Attach(String filename, String filepath) {
        this.filename = filename;
        this.filepath = filepath;
    }
}