package kr.hs.dgsw.shopping_back.Domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Builder;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class Attach {
    private Long id;
    private Long userId;
    private String filename;
    private String filepath;
    private LocalDateTime created;
    private LocalDateTime updated;

    @Builder
    public Attach(Long userId, String filename, String filepath) {
        this.userId = userId;
        this.filename = filename;
        this.filepath = filepath;
    }
}